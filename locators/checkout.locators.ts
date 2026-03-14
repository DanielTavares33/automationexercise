import { Page, Locator } from 'playwright';

export class CheckoutLocators {
  readonly deliveryAddress: Locator;
  readonly invoiceAddress: Locator;
  readonly commentTextarea: Locator;
  readonly placeOrderButton: Locator;
  readonly checkoutModalRegisterLink: Locator;
  readonly proceedToCheckoutButton: Locator;

  constructor(page: Page) {
    this.deliveryAddress = page.locator('#address_delivery');
    this.invoiceAddress = page.locator('#address_invoice');
    this.commentTextarea = page.locator('textarea[name="message"]');
    this.placeOrderButton = page.locator('a.check_out');
    this.checkoutModalRegisterLink = page.locator('#checkoutModal a[href="/login"]');
    this.proceedToCheckoutButton = page.locator('a.check_out');
  }
}
