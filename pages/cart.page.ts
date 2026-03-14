import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';
import { CartLocators } from '../locators/cart.locators';

export class CartPage extends BasePage {
  readonly locators: CartLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new CartLocators(page);
  }

  async verifyCartPageDisplayed(): Promise<void> {
    await expect(this.page).toHaveURL(/\/view_cart/);
  }

  async verifyProductCount(count: number): Promise<void> {
    await expect(this.locators.cartRows).toHaveCount(count);
  }

  async removeFirstProduct(): Promise<void> {
    await this.locators.deleteFirstProductButton.click();
  }

  async verifyCartIsEmpty(): Promise<void> {
    await expect(this.locators.cartRows).toHaveCount(0);
  }

  async verifyProductQuantity(expected: number): Promise<void> {
    await expect(this.locators.cartQuantities.first()).toHaveText(String(expected));
  }

  async verifyCartNotEmpty(): Promise<void> {
    await expect(this.locators.cartRows.first()).toBeVisible();
  }

  async verifyCartDetails(): Promise<void> {
    const count = await this.locators.cartRows.count();
    for (let i = 0; i < count; i++) {
      await expect(this.locators.cartProductNames.nth(i)).toBeVisible();
      await expect(this.locators.cartPrices.nth(i)).toBeVisible();
      await expect(this.locators.cartQuantities.nth(i)).toBeVisible();
      await expect(this.locators.cartTotals.nth(i)).toBeVisible();
    }
  }
}
