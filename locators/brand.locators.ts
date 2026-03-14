import { Page, Locator } from 'playwright';

export class BrandLocators {
  readonly brandsSidebar: Locator;
  readonly brandPageHeading: Locator;
  readonly brandProductsList: Locator;

  constructor(page: Page) {
    this.brandsSidebar = page.locator('.brands-name');
    this.brandPageHeading = page.locator('h2.title.text-center');
    this.brandProductsList = page.locator('.features_items');
  }
}
