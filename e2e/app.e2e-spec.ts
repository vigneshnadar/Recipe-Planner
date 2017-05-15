import { ShoppingProjectAngularPage } from './app.po';

describe('shopping-project-angular App', () => {
  let page: ShoppingProjectAngularPage;

  beforeEach(() => {
    page = new ShoppingProjectAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
