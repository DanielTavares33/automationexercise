import { Page, Locator } from 'playwright';

export class HomeLocators {
  readonly signupLoginButton: Locator;
  readonly contactUsButton: Locator;
  readonly testCasesButton: Locator;
  readonly productsButton: Locator;
  readonly cartButton: Locator;

  // Footer subscription
  readonly footer: Locator;
  readonly subscriptionHeading: Locator;
  readonly subscriptionEmailInput: Locator;
  readonly subscriptionButton: Locator;
  readonly subscriptionSuccessMessage: Locator;

  // Recommended items
  readonly recommendedItemsSection: Locator;
  readonly firstRecommendedAddToCart: Locator;

  // Scroll
  readonly scrollUpButton: Locator;
  readonly sliderCarousel: Locator;

  constructor(page: Page) {
    this.signupLoginButton = page.locator('.shop-menu a[href="/login"]');
    this.contactUsButton = page.locator('a[href="/contact_us"]');
    this.testCasesButton = page.locator('.shop-menu a[href="/test_cases"]');
    this.productsButton = page.locator('.shop-menu a[href="/products"]');
    this.cartButton = page.locator('.shop-menu a[href="/view_cart"]');

    this.footer = page.locator('footer');
    this.subscriptionHeading = page.locator('footer h2');
    this.subscriptionEmailInput = page.locator('input#susbscribe_email');
    this.subscriptionButton = page.locator('button#subscribe');
    this.subscriptionSuccessMessage = page.locator('div#success-subscribe');

    this.recommendedItemsSection = page.locator('.recommended_items');
    this.firstRecommendedAddToCart = page.locator('.recommended_items .add-to-cart').first();

    this.scrollUpButton = page.locator('a#scrollUp');
    this.sliderCarousel = page.locator('#slider-carousel');
  }
}
