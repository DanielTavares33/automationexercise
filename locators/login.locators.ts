import { Page, Locator } from 'playwright';

export class LoginLocators {
  readonly nameInput: Locator;
  readonly signupEmailInput : Locator;
  readonly signupButton: Locator;
  readonly passwordInput: Locator;
  readonly loginEmailInput: Locator;
  readonly loginButton: Locator;
  readonly emailExistsError: Locator;

  constructor(page: Page) {
    this.nameInput = page.locator('input[data-qa="signup-name"]');
    this.signupEmailInput = page.locator('input[data-qa="signup-email"]');
    this.signupButton = page.locator('button[data-qa="signup-button"]');
    this.passwordInput = page.locator('input[data-qa="login-password"]');
    this.loginEmailInput = page.locator('input[data-qa="login-email"]');
    this.loginButton = page.locator('button[data-qa="login-button"]');
    this.emailExistsError = page.locator('form[action="/signup"] p[style="color: red;"]');
  }
}