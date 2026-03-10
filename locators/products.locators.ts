import { Page, Locator } from 'playwright';

export class ProductsLocators {
  // Products list page
  readonly allProductsHeading: Locator;
  readonly productsList: Locator;
  readonly firstViewProductLink: Locator;

  // Product detail page
  readonly productName: Locator;
  readonly productCategory: Locator;
  readonly productPrice: Locator;
  readonly productAvailability: Locator;
  readonly productCondition: Locator;
  readonly productBrand: Locator;

  constructor(page: Page) {
    this.allProductsHeading = page.locator('h2.title.text-center');
    this.productsList = page.locator('.features_items');
    this.firstViewProductLink = page.locator('.features_items .col-sm-4 a[href*="product_details"]').first();

    this.productName = page.locator('.product-information h2');
    this.productCategory = page.locator('.product-information p:nth-of-type(1)');
    this.productPrice = page.locator('.product-information span').first();
    this.productAvailability = page.locator('.product-information p:nth-of-type(2)');
    this.productCondition = page.locator('.product-information p:nth-of-type(3)');
    this.productBrand = page.locator('.product-information p:nth-of-type(4)');
  }
}
