import { test as base } from 'playwright-bdd';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';
import { RegisterPage } from '../pages/register.page';
import { ContactUsPage } from '../pages/contact_us.page';

export const test = base.extend<{
  homePage: HomePage;
  loginPage: LoginPage;
  registerPage: RegisterPage;
  contactUsPage: ContactUsPage;
}>({
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
});
