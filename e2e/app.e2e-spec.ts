import { NgOXOPage } from './app.po';

describe('ng-oxo App', function() {
  let page: NgOXOPage;

  beforeEach(() => {
    page = new NgOXOPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
