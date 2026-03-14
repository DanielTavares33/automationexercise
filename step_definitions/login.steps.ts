import { createBdd } from 'playwright-bdd';
import { test } from '../support/fixtures';
import { allure } from '../support/allure-helpers';

const { Then, When } = createBdd(test);

Then('I should see the new user signup form', async ({ loginPage }) => {
  allure.feature('Authentication');
  allure.story('User Signup');
  allure.severity('critical');
  
  await loginPage.verifySignupForm();
});

Then('I enter a valid {string}', async ({ loginPage }, input: string) => {
  allure.feature('Authentication');
  allure.story('User Signup');
  allure.severity('critical');
  
  await loginPage.signUpForm(input);
});

Then('I should see an error {string}', async ({ loginPage }, message: string) => {
  allure.feature('Authentication');
  allure.story('Error Validation');
  allure.severity('normal');
  
  switch (message) {
    case 'Email Address already exist!':
      await loginPage.verifyEmailExistsError();
      break;
    case 'Your email or password is incorrect!':
      await loginPage.verifyInvalidCredentialsError();
      break;
    default:
      throw new Error(`Unknown error message: ${message}`);
  }
});

When('I enter incorrect email address and password', async ({ loginPage }) => {
  allure.feature('Authentication');
  allure.story('Login Validation');
  allure.severity('critical');
  
  await loginPage.fillInvalidLoginForm();
});

Then('I should see the login form', async ({ loginPage }) => {
  allure.feature('Authentication');
  allure.story('User Login');
  allure.severity('critical');
  
  await loginPage.verifyLoginForm();
});

When('I fill in the login form', async ({ loginPage }) => {
  allure.feature('Authentication');
  allure.story('User Login');
  allure.severity('critical');
  
  await loginPage.fillLoginForm();
});

Then('I should be logged in as the user', async ({ loginPage }) => {
  allure.feature('Authentication');
  allure.story('User Login');
  allure.severity('critical');
  
  await loginPage.verifyLoggedIn();
});

Then('I should see the "ACCOUNT DELETED!" message', async ({ loginPage }) => {
  allure.feature('User Management');
  allure.story('Account Deletion');
  allure.severity('critical');
  
  await loginPage.verifyAccountDeleted();
});
