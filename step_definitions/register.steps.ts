import { createBdd } from 'playwright-bdd';
import { test } from '../support/fixtures';
import { allure } from '../support/allure-helpers';

const { Given, Then, When } = createBdd(test);

Given('I have a registered account', async ({ page, homePage, loginPage, registerPage }) => {
  allure.feature('User Management');
  allure.story('Account Registration');
  allure.severity('critical');
  
  await homePage.clickButton();
  await loginPage.signUpForm('name');
  await loginPage.signUpForm('email address');
  await loginPage.clickSignupButton();
  await registerPage.fillAccountInformationForm();
  await registerPage.clickCreateAccountButton();
  await page.goto('/');
});

Then('I fill in the account information form', async ({ registerPage }) => {
  allure.feature('User Management');
  allure.story('Account Registration');
  allure.severity('critical');
  
  await registerPage.fillAccountInformationForm();
});

Then('I should see the "ENTER ACCOUNT INFORMATION" form', async ({ registerPage }) => {
  allure.feature('User Management');
  allure.story('Account Registration');
  allure.severity('critical');
  
  await registerPage.verifyAccountInformationForm();
});

When('I click the {string} button', async ({ registerPage }, buttonText: string) => {
  allure.feature('User Management');
  allure.story('Account Registration');
  allure.severity('critical');
  
  switch (buttonText) {
    case 'Create Account':
      await registerPage.clickCreateAccountButton();
      break;
    case 'Continue':
      await registerPage.clickContinueButton();
      break;
    default:
      throw new Error(`Unknown button: ${buttonText}`);
  }
});

Then('I should see the "ACCOUNT CREATED!" message', async ({ registerPage }) => {
  allure.feature('User Management');
  allure.story('Account Registration');
  allure.severity('critical');
  
  await registerPage.verifyAccountCreated();
});

Then('I should be logged in as the new user', async ({ registerPage }) => {
  allure.feature('User Management');
  allure.story('Account Registration');
  allure.severity('critical');
  
  await registerPage.verifyLoggedIn();
});
