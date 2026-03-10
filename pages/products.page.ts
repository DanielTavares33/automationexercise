import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';
import { ProductsLocators } from '../locators/products.locators';

export class ProductsPage extends BasePage {
  readonly locators: ProductsLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new ProductsLocators(page);
  }

  async verifyAllProductsPage(): Promise<void> {
    await expect(this.page).toHaveURL('https://automationexercise.com/products');
    await expect(this.locators.allProductsHeading).toBeVisible();
  }

  async verifyProductsListVisible(): Promise<void> {
    await expect(this.locators.productsList).toBeVisible();
  }

  async clickFirstViewProduct(): Promise<void> {
    await this.locators.firstViewProductLink.click();
  }

  async verifyProductDetailPage(): Promise<void> {
    await expect(this.page).toHaveURL(/\/product_details\//);
  }

  async verifyProductDetails(): Promise<void> {
    await expect(this.locators.productName).toBeVisible();
    await expect(this.locators.productCategory).toBeVisible();
    await expect(this.locators.productPrice).toBeVisible();
    await expect(this.locators.productAvailability).toBeVisible();
    await expect(this.locators.productCondition).toBeVisible();
    await expect(this.locators.productBrand).toBeVisible();
  }
}
