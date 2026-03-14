import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';
import { PaymentLocators } from '../locators/payment.locators';
import { faker } from '@faker-js/faker';

export class PaymentPage extends BasePage {
  readonly locators: PaymentLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new PaymentLocators(page);
  }

  async fillPaymentDetails(): Promise<void> {
    await this.locators.nameOnCard.fill(faker.person.fullName());
    await this.locators.cardNumber.fill(faker.finance.creditCardNumber());
    await this.locators.cvc.fill(faker.finance.creditCardCVV());
    await this.locators.expiryMonth.fill(String(faker.number.int({ min: 1, max: 12 })).padStart(2, '0'));
    await this.locators.expiryYear.fill(String(faker.number.int({ min: 2026, max: 2030 })));
  }

  async confirmPayment(): Promise<void> {
    await this.locators.payButton.click();
  }

  async verifyOrderSuccess(): Promise<void> {
    await expect(this.locators.successMessage).toBeVisible();
  }

  async downloadAndVerifyInvoice(): Promise<void> {
    const downloadPromise = this.page.waitForEvent('download');
    await this.locators.downloadInvoiceButton.click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBeTruthy();
  }

  async clickContinue(): Promise<void> {
    await this.locators.continueButton.click();
  }
}
