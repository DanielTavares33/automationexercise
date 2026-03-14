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

  // Search
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly searchedProducts: Locator;

  // Product detail actions
  readonly quantityInput: Locator;
  readonly addToCartButton: Locator;

  // Review form
  readonly reviewTab: Locator;
  readonly reviewNameInput: Locator;
  readonly reviewEmailInput: Locator;
  readonly reviewTextarea: Locator;
  readonly reviewSubmitButton: Locator;
  readonly reviewSuccessMessage: Locator;

  // Cart modal
  readonly productCards: Locator;
  readonly continueShoppingButton: Locator;
  readonly viewCartLink: Locator;

  constructor(page: Page) {
    this.allProductsHeading = page.locator('h2.title.text-center');
    this.productsList = page.locator('.features_items');
    this.firstViewProductLink = page.locator('.features_items .col-sm-4 a[href*="product_details"]').first();

    this.searchInput = page.locator('input#search_product');
    this.searchButton = page.locator('button#submit_search');
    this.searchedProducts = page.locator('.features_items .col-sm-4');

    this.quantityInput = page.locator('input#quantity');
    this.addToCartButton = page.locator('.product-information .btn.cart');

    this.productCards = page.locator('.features_items .col-sm-4');
    this.continueShoppingButton = page.locator('#cartModal .close-modal');
    this.viewCartLink = page.locator('#cartModal a[href="/view_cart"]');

    this.reviewTab = page.locator('a[href="#reviews"]');
    this.reviewNameInput = page.locator('input#name');
    this.reviewEmailInput = page.locator('input#email');
    this.reviewTextarea = page.locator('textarea#review');
    this.reviewSubmitButton = page.locator('button#button-review');
    this.reviewSuccessMessage = page.locator('#review-section .alert-success span');

    this.productName = page.locator('.product-information h2');
    this.productCategory = page.locator('.product-information p:nth-of-type(1)');
    this.productPrice = page.locator('.product-information span').first();
    this.productAvailability = page.locator('.product-information p:nth-of-type(2)');
    this.productCondition = page.locator('.product-information p:nth-of-type(3)');
    this.productBrand = page.locator('.product-information p:nth-of-type(4)');
  }
}
