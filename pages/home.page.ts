import { Page } from 'playwright';
import { BasePage } from './base.page';
import { HomeLocators } from '../locators/home.locators';

export class HomePage extends BasePage {
  readonly locators: HomeLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new HomeLocators(page);
  }

  async clickButton(): Promise<void> {
    await this.locators.signupLoginButton.click();
  }

  async clickContactUs(): Promise<void> {
    await this.locators.contactUsButton.click();
  }

  async visitHomePage(): Promise<void> {
    await this.page.goto('https://automationexercise.com/');
    await this.googleConsentPopup();
  }

  private async googleConsentPopup() {
    const consentButton = this.page.getByRole('button', { name: 'Consent' });
    if (await consentButton.isVisible()) {
      await consentButton.click();
    }
  }
}
