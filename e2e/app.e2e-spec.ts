import { OnlineFinancePage } from './app.po';

describe('online-finance App', function() {
  let page: OnlineFinancePage;

  beforeEach(() => {
    page = new OnlineFinancePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
