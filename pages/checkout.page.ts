import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';
import { CheckoutLocators } from '../locators/checkout.locators';

export class CheckoutPage extends BasePage {
  readonly locators: CheckoutLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new CheckoutLocators(page);
  }

  async proceedToCheckout(): Promise<void> {
    await this.locators.proceedToCheckoutButton.click();
  }

  async clickRegisterLoginInModal(): Promise<void> {
    await this.locators.checkoutModalRegisterLink.click();
  }

  async verifyAddressDetailsAndOrderReview(): Promise<void> {
    await expect(this.locators.deliveryAddress).toBeVisible();
    await expect(this.locators.invoiceAddress).toBeVisible();
  }

  async enterComment(comment: string): Promise<void> {
    await this.locators.commentTextarea.fill(comment);
  }

  async placeOrder(): Promise<void> {
    await this.locators.placeOrderButton.click();
  }
}
