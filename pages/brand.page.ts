import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';
import { BrandLocators } from '../locators/brand.locators';

export class BrandPage extends BasePage {
  readonly locators: BrandLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new BrandLocators(page);
  }

  async verifyBrandsVisible(): Promise<void> {
    await expect(this.locators.brandsSidebar).toBeVisible();
  }

  async clickBrand(brand: string): Promise<void> {
    await this.page.locator(`a[href="/brand_products/${brand}"]`).click();
  }

  async verifyBrandPage(brand: string): Promise<void> {
    await expect(this.page).toHaveURL(`/brand_products/${brand}`);
    await expect(this.locators.brandPageHeading).toContainText(brand);
    await expect(this.locators.brandProductsList).toBeVisible();
  }
}
