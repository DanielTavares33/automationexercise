import { createBdd } from 'playwright-bdd';
import { test } from '../support/fixtures';
import { allure } from '../support/allure-helpers';

const { When, Then } = createBdd(test);

Then('I should see the {string} heading', async ({ contactUsPage }, _heading: string) => {
  allure.feature('Contact Us');
  allure.story('Contact Form');
  allure.severity('normal');
  
  await contactUsPage.verifyGetInTouchHeading();
});

When('I fill in the contact us form', async ({ contactUsPage }) => {
  allure.feature('Contact Us');
  allure.story('Contact Form');
  allure.severity('normal');
  
  await contactUsPage.fillContactForm();
});

When('I upload a file', async ({ contactUsPage }) => {
  allure.feature('Contact Us');
  allure.story('File Upload');
  allure.severity('normal');
  
  await contactUsPage.uploadFile();
});

Then('I should see the success message {string}', async ({ contactUsPage }, message: string) => {
  allure.feature('Contact Us');
  allure.story('Contact Form');
  allure.severity('normal');
  
  await contactUsPage.verifySuccessMessage(message);
});

Then('I should be on the home page', async ({ contactUsPage }) => {
  allure.feature('Navigation');
  allure.story('Page Navigation');
  allure.severity('normal');
  
  await contactUsPage.verifyHomePage();
});
