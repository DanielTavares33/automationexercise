import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
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

  async setQuantity(qty: number): Promise<void> {
    await this.locators.quantityInput.fill(String(qty));
  }

  async addToCartFromDetail(): Promise<void> {
    await this.locators.addToCartButton.click();
  }

  async hoverAndAddToCart(index: number): Promise<void> {
    const card = this.locators.productCards.nth(index);
    await card.locator('.single-products').hover();
    await card.locator('.overlay-content .add-to-cart').click();
  }

  async clickContinueShopping(): Promise<void> {
    await this.locators.continueShoppingButton.click();
  }

  async clickViewCart(): Promise<void> {
    await this.locators.viewCartLink.click();
  }

  async searchProduct(productName: string): Promise<void> {
    await this.locators.searchInput.fill(productName);
    await this.locators.searchButton.click();
  }

  async verifySearchedProductsHeading(): Promise<void> {
    await expect(this.locators.allProductsHeading).toBeVisible();
  }

  async verifySearchedProductsVisible(): Promise<void> {
    await expect(this.locators.searchedProducts.first()).toBeVisible();
  }

  async verifyWriteYourReviewVisible(): Promise<void> {
    await expect(this.locators.reviewTab).toBeVisible();
  }

  async fillReviewForm(): Promise<void> {
    await this.locators.reviewNameInput.fill(faker.person.fullName());
    await this.locators.reviewEmailInput.fill(faker.internet.email());
    await this.locators.reviewTextarea.fill(faker.lorem.sentence());
  }

  async submitReview(): Promise<void> {
    await this.locators.reviewSubmitButton.click();
  }

  async verifyReviewSuccess(): Promise<void> {
    await expect(this.locators.reviewSuccessMessage).toBeVisible();
  }

  async addAllSearchedProductsToCart(): Promise<void> {
    const cards = this.locators.productCards;
    const count = await cards.count();
    for (let i = 0; i < count; i++) {
      await cards.nth(i).locator('.single-products').hover();
      await cards.nth(i).locator('.overlay-content .add-to-cart').click();
      if (await this.locators.continueShoppingButton.isVisible()) {
        await this.locators.continueShoppingButton.click();
      }
    }
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
