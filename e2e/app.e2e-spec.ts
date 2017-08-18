import { HomeworkPage } from './app.po';

describe('homework App', () => {
  let page: HomeworkPage;

  beforeEach(() => {
    page = new HomeworkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
