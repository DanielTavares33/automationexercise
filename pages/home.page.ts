import { Page, Locator } from 'playwright';
import { BasePage } from './base.page';

export class HomePage extends BasePage {
  private signupLoginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.signupLoginButton = page.getByRole('link', { name: 'Signup / Login' });
  }

  async goto(): Promise<void> {
    await super.goto('/');
  }

  async clickSignupLogin(): Promise<void> {
    await this.signupLoginButton.click();
  }
}
