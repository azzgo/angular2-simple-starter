import { browser, element, by } from 'protractor';

export class Page {
  navigateTo() {
    return browser.get('/home');
  }

  getParagraphText() {
    browser.sleep(5000);
    return element(by.css('.navbar .title')).getText();
  }
}
