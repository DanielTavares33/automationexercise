import { Page, Locator } from 'playwright';

export class HomeLocators {
  readonly signupLoginButton: Locator;

  constructor(page: Page) {
    this.signupLoginButton = page.locator('a[href="/login"]');
  }
}
