import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeworkService {

  private url = 'https://www.easy-mock.com/mock/599569f1059b9c566dc4ad62/homework/';

  constructor(private http: Http) {
  }

  getList(): Promise<List[]> {
    return this.http.get(this.url + 'list')
      .toPromise()
      .then(response => response.json() as List[])
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

interface List {
  imgUrl: string,
  url: string,
  status: string,
  ip: string,
  path: string,
  addResourceStatus: boolean,
  inputVal: string,
  resources: any
}
