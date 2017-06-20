import { browser, element, by } from 'protractor';

describe('Page', function() {
  it('document title should be Angular2 Simple Stater', () => {
    browser.get('');
    expect(browser.getTitle()).toEqual('Angular2 Simple Stater');
  });
});
