import { PortfolioSiteAngularPage } from './app.po';

describe('portfolio-site-angular App', () => {
  let page: PortfolioSiteAngularPage;

  beforeEach(() => {
    page = new PortfolioSiteAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
