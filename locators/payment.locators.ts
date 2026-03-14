import { Page, Locator } from 'playwright';

export class PaymentLocators {
  readonly nameOnCard: Locator;
  readonly cardNumber: Locator;
  readonly cvc: Locator;
  readonly expiryMonth: Locator;
  readonly expiryYear: Locator;
  readonly payButton: Locator;
  readonly successMessage: Locator;
  readonly downloadInvoiceButton: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.nameOnCard = page.locator('input[data-qa="name-on-card"]');
    this.cardNumber = page.locator('input[data-qa="card-number"]');
    this.cvc = page.locator('input[data-qa="cvc"]');
    this.expiryMonth = page.locator('input[data-qa="expiry-month"]');
    this.expiryYear = page.locator('input[data-qa="expiry-year"]');
    this.payButton = page.locator('button[data-qa="pay-button"]');
    this.successMessage = page.locator('h2[data-qa="order-placed"]');
    this.downloadInvoiceButton = page.locator('a[href*="/download_invoice/"]');
    this.continueButton = page.locator('a[data-qa="continue-button"]');
  }
}
