import { createBdd } from 'playwright-bdd';
import { test } from '../support/fixtures';

const { Given, When, Then } = createBdd(test);

Given('I visit the home page', async ({ homePage }) => {
  await homePage.visitHomePage();
});

When('I navigate to the login page', async ({ page }) => {
  await page.goto('/login');
});

When('I scroll down to footer', async ({ homePage }) => {
  await homePage.scrollToFooter();
});

Then('I should see the subscription heading', async ({ homePage }) => {
  await homePage.verifySubscriptionHeading();
});

When('I subscribe with email {string}', async ({ homePage }, email: string) => {
  await homePage.subscribe(email);
});

Then('I should see the subscription success message', async ({ homePage }) => {
  await homePage.verifySubscriptionSuccessMessage();
});

Then('I should see the recommended items', async ({ homePage }) => {
  await homePage.verifyRecommendedItemsVisible();
});

When('I add the first recommended item to cart', async ({ homePage }) => {
  await homePage.addFirstRecommendedToCart();
});

When('I click the scroll up arrow', async ({ homePage }) => {
  await homePage.clickScrollUpArrow();
});

When('I scroll up to top', async ({ homePage }) => {
  await homePage.scrollToTop();
});

Then('I should see the top of the page', async ({ homePage }) => {
  await homePage.verifyTopOfPage();
});
