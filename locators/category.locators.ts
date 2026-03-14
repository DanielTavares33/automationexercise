import { Page, Locator } from 'playwright';

export class CategoryLocators {
  readonly categorySidebar: Locator;

  readonly womenCategoryLink: Locator;
  readonly womenDressLink: Locator;
  readonly womenTopsLink: Locator;
  readonly womenSareeLink: Locator;

  readonly menCategoryLink: Locator;
  readonly menTshirtsLink: Locator;
  readonly menJeansLink: Locator;

  readonly categoryPageHeading: Locator;

  constructor(page: Page) {
    this.categorySidebar = page.locator('.left-sidebar');

    this.womenCategoryLink = page.locator('a[href="#Women"]');
    this.womenDressLink = page.locator('a[href="/category_products/1"]');
    this.womenTopsLink = page.locator('a[href="/category_products/2"]');
    this.womenSareeLink = page.locator('a[href="/category_products/7"]');

    this.menCategoryLink = page.locator('a[href="#Men"]');
    this.menTshirtsLink = page.locator('a[href="/category_products/3"]');
    this.menJeansLink = page.locator('a[href="/category_products/6"]');

    this.categoryPageHeading = page.locator('h2.title.text-center');
  }
}
