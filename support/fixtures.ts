import { test as base } from 'playwright-bdd';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';
import { RegisterPage } from '../pages/register.page';
import { ContactUsPage } from '../pages/contact_us.page';
import { ProductsPage } from '../pages/products.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';
import { PaymentPage } from '../pages/payment.page';
import { CategoryPage } from '../pages/category.page';
import { BrandPage } from '../pages/brand.page';

const AD_DOMAINS = [
  'googlesyndication',
  'doubleclick',
  'googleadservices',
  'googletagmanager',
  'adsbygoogle',
  'admaster',
  'amazon-adsystem',
  'moatads',
  'scorecardresearch',
];

export const test = base.extend<{
  homePage: HomePage;
  loginPage: LoginPage;
  registerPage: RegisterPage;
  contactUsPage: ContactUsPage;
  productsPage: ProductsPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  paymentPage: PaymentPage;
  categoryPage: CategoryPage;
  brandPage: BrandPage;
}>({
  page: async ({ page }, use) => {
    await page.route('**/*', (route) => {
      const url = route.request().url();
      if (AD_DOMAINS.some((domain) => url.includes(domain))) {
        route.abort();
      } else {
        route.continue();
      }
    });
    await use(page);
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  contactUsPage: async ({ page }, use) => {
    await use(new ContactUsPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  paymentPage: async ({ page }, use) => {
    await use(new PaymentPage(page));
  },
  categoryPage: async ({ page }, use) => {
    await use(new CategoryPage(page));
  },
  brandPage: async ({ page }, use) => {
    await use(new BrandPage(page));
  },
});
