import { Page, expect, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { CategoryLocators } from '../locators/category.locators';

export class CategoryPage extends BasePage {
  readonly locators: CategoryLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new CategoryLocators(page);
  }

  async verifyCategorySidebarVisible(): Promise<void> {
    await expect(this.locators.categorySidebar).toBeVisible();
  }

  async expandCategory(category: string): Promise<void> {
    const links: Record<string, Locator> = {
      Women: this.locators.womenCategoryLink,
      Men: this.locators.menCategoryLink,
    };
    await links[category].click();
  }

  async clickSubCategory(category: string, subCategory: string): Promise<void> {
    const links: Record<string, Locator> = {
      'Women-Dress': this.locators.womenDressLink,
      'Women-Tops': this.locators.womenTopsLink,
      'Women-Saree': this.locators.womenSareeLink,
      'Men-Tshirts': this.locators.menTshirtsLink,
      'Men-Jeans': this.locators.menJeansLink,
    };
    await links[`${category}-${subCategory}`].click();
  }

  async verifyCategoryPageDisplayed(): Promise<void> {
    await expect(this.page).toHaveURL(/\/category_products\//);
    await expect(this.locators.categoryPageHeading).toBeVisible();
  }
}
