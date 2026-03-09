import { createBdd } from 'playwright-bdd';
import { test } from '../support/fixtures';

const { Then, When } = createBdd(test);

Then('I should see the new user signup form', async ({ loginPage }) => {
  await loginPage.verifySignupForm();
});

Then('I enter a valid {string}', async ({ loginPage }, input: string) => {
  await loginPage.signUpForm(input);
});

Then('I should see an error {string}', async ({ loginPage }, message: string) => {
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
  await loginPage.fillInvalidLoginForm();
});

Then('I should see the login form', async ({ loginPage }) => {
  await loginPage.verifyLoginForm();
});

When('I fill in the login form', async ({ loginPage }) => {
  await loginPage.fillLoginForm();
});

Then('I should be logged in as the user', async ({ loginPage }) => {
  await loginPage.verifyLoggedIn();
});

Then('I should see the "ACCOUNT DELETED!" message', async ({ loginPage }) => {
  await loginPage.verifyAccountDeleted();
});
