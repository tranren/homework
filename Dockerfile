### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:8-alpine as builder

WORKDIR /app

COPY ./package.json /app/
RUN npm install

COPY . /app/

RUN ng build

### STAGE 2: Setup ###

FROM nginx:1.13.3-alpine

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
