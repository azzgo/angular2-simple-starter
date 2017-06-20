import { Page } from './app.po';

describe('Page', function() {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  it('should display title WorkSpace', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('WorkSpace');
  });
});
