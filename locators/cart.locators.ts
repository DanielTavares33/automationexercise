import { Page, Locator } from 'playwright';

export class CartLocators {
  readonly cartRows: Locator;
  readonly cartProductNames: Locator;
  readonly cartPrices: Locator;
  readonly cartQuantities: Locator;
  readonly cartTotals: Locator;
  readonly deleteFirstProductButton: Locator;
  readonly emptyCartMessage: Locator;

  constructor(page: Page) {
    this.cartRows = page.locator('#cart_info_table tbody tr');
    this.cartProductNames = page.locator('#cart_info_table .cart_description h4');
    this.cartPrices = page.locator('#cart_info_table .cart_price p');
    this.cartQuantities = page.locator('#cart_info_table .cart_quantity button');
    this.cartTotals = page.locator('#cart_info_table .cart_total_price');
    this.deleteFirstProductButton = page.locator('a.cart_quantity_delete').first();
    this.emptyCartMessage = page.locator('#empty_cart');
  }
}
