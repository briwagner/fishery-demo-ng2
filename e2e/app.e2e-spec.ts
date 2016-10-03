import { FisheriesPage } from './app.po';

describe('fisheries App', function() {
  let page: FisheriesPage;

  beforeEach(() => {
    page = new FisheriesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
