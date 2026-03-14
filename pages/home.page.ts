import { Page, expect } from '@playwright/test';
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

  async clickTestCases(): Promise<void> {
    await this.locators.testCasesButton.click();
  }

  async clickProducts(): Promise<void> {
    await this.locators.productsButton.click();
  }

  async clickCart(): Promise<void> {
    await this.locators.cartButton.click();
  }

  async scrollToFooter(): Promise<void> {
    await this.locators.footer.scrollIntoViewIfNeeded();
  }

  async verifySubscriptionHeading(): Promise<void> {
    await expect(this.locators.subscriptionHeading).toBeVisible();
  }

  async subscribe(email: string): Promise<void> {
    await this.locators.subscriptionEmailInput.fill(email);
    await this.locators.subscriptionButton.click();
  }

  async verifySubscriptionSuccessMessage(): Promise<void> {
    await expect(this.locators.subscriptionSuccessMessage).toBeVisible();
  }

  async verifyRecommendedItemsVisible(): Promise<void> {
    await expect(this.locators.recommendedItemsSection).toBeVisible();
  }

  async addFirstRecommendedToCart(): Promise<void> {
    await this.locators.firstRecommendedAddToCart.click();
  }

  async clickScrollUpArrow(): Promise<void> {
    await this.locators.scrollUpButton.waitFor({ state: 'visible' });
    await this.locators.scrollUpButton.click();
  }

  async scrollToTop(): Promise<void> {
    await this.page.evaluate(() => window.scrollTo(0, 0));
  }

  async verifyTopOfPage(): Promise<void> {
    await expect(this.locators.sliderCarousel).toBeInViewport();
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
