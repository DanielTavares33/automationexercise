import { Page, Locator } from 'playwright';

export class HomeLocators {
  readonly signupLoginButton: Locator;
  readonly contactUsButton: Locator;
  readonly testCasesButton: Locator;
  readonly productsButton: Locator;

  constructor(page: Page) {
    this.signupLoginButton = page.locator('a[href="/login"]');
    this.contactUsButton = page.locator('a[href="/contact_us"]');
    this.testCasesButton = page.locator('a[href="/test_cases"]');
    this.productsButton = page.locator('a[href="/products"]');
  }
}
