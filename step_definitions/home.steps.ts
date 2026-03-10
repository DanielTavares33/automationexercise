import { createBdd } from 'playwright-bdd';
import { test } from '../support/fixtures';

const { Given, When } = createBdd(test);

Given('I visit the home page', async ({ homePage }) => {
  await homePage.visitHomePage();
});

When('I navigate to the login page', async ({ page }) => {
  await page.goto('/login');
});

When('I click on the {string} button', async ({ homePage, loginPage, contactUsPage }, buttonText: string) => {
  switch (buttonText) {
    case 'Signup / Login':
      await homePage.clickButton();
      break;
    case 'Signup':
      await loginPage.clickSignupButton();
      break;
    case 'Login':
      await loginPage.clickLoginButton();
      break;
    case 'Delete Account':
      await loginPage.clickDeleteAccount();
      break;
    case 'Logout':
      await loginPage.clickLogout();
      break;
    case 'Contact Us':
      await homePage.clickContactUs();
      break;
    case 'Submit':
      await contactUsPage.submitForm();
      break;
    case 'Home':
      await contactUsPage.clickHomeButton();
      break;
    default:
      throw new Error(`Unknown button: ${buttonText}`);
  }
});
