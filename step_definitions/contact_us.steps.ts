import { createBdd } from 'playwright-bdd';
import { test } from '../support/fixtures';

const { When, Then } = createBdd(test);

Then('I should see the {string} heading', async ({ contactUsPage }, _heading: string) => {
  await contactUsPage.verifyGetInTouchHeading();
});

When('I fill in the contact us form', async ({ contactUsPage }) => {
  await contactUsPage.fillContactForm();
});

When('I upload a file', async ({ contactUsPage }) => {
  await contactUsPage.uploadFile();
});

Then('I should see the success message {string}', async ({ contactUsPage }, message: string) => {
  await contactUsPage.verifySuccessMessage(message);
});

Then('I should be on the home page', async ({ contactUsPage }) => {
  await contactUsPage.verifyHomePage();
});
