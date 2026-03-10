import { Page, Locator } from 'playwright';

export class HomeLocators {
  readonly signupLoginButton: Locator;
  readonly contactUsButton: Locator;

  constructor(page: Page) {
    this.signupLoginButton = page.locator('a[href="/login"]');
    this.contactUsButton = page.locator('a[href="/contact_us"]');
  }
}
