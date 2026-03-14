import { createBdd } from 'playwright-bdd';
import { test } from '../support/fixtures';
import { allure } from '../support/allure-helpers';

const { Given, When, Then } = createBdd(test);

Given('I visit the home page', async ({ homePage }) => {
  allure.feature('Homepage');
  allure.story('Navigation');
  allure.severity('critical');
  
  await homePage.visitHomePage();
});

When('I navigate to the login page', async ({ page }) => {
  allure.feature('Navigation');
  allure.story('Page Navigation');
  allure.severity('critical');
  
  await page.goto('/login');
});

When('I scroll down to footer', async ({ homePage }) => {
  allure.feature('Homepage');
  allure.story('Page Navigation');
  allure.severity('normal');
  
  await homePage.scrollToFooter();
});

Then('I should see the subscription heading', async ({ homePage }) => {
  allure.feature('Homepage');
  allure.story('Newsletter Subscription');
  allure.severity('normal');
  
  await homePage.verifySubscriptionHeading();
});

When('I subscribe with email {string}', async ({ homePage }, email: string) => {
  allure.feature('Homepage');
  allure.story('Newsletter Subscription');
  allure.severity('normal');
  
  await homePage.subscribe(email);
});

Then('I should see the subscription success message', async ({ homePage }) => {
  allure.feature('Homepage');
  allure.story('Newsletter Subscription');
  allure.severity('normal');
  
  await homePage.verifySubscriptionSuccessMessage();
});

Then('I should see the recommended items', async ({ homePage }) => {
  allure.feature('Homepage');
  allure.story('Product Recommendations');
  allure.severity('normal');
  
  await homePage.verifyRecommendedItemsVisible();
});

When('I add the first recommended item to cart', async ({ homePage }) => {
  allure.feature('Homepage');
  allure.story('Product Recommendations');
  allure.severity('normal');
  
  await homePage.addFirstRecommendedToCart();
});

When('I click the scroll up arrow', async ({ homePage }) => {
  allure.feature('Homepage');
  allure.story('Page Navigation');
  allure.severity('trivial');
  
  await homePage.clickScrollUpArrow();
});

When('I scroll up to top', async ({ homePage }) => {
  allure.feature('Homepage');
  allure.story('Page Navigation');
  allure.severity('trivial');
  
  await homePage.scrollToTop();
});

Then('I should see the top of the page', async ({ homePage }) => {
  allure.feature('Homepage');
  allure.story('Page Navigation');
  allure.severity('trivial');
  
  await homePage.verifyTopOfPage();
});
