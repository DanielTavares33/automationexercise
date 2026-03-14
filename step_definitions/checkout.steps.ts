import { createBdd } from 'playwright-bdd';
import { test } from '../support/fixtures';
import { allure } from '../support/allure-helpers';

const { Then, When } = createBdd(test);

Then('the cart page is displayed', async ({ cartPage }) => {
  allure.feature('Checkout Flow');
  allure.story('Shopping Cart');
  allure.severity('critical');
  
  await cartPage.verifyCartPageDisplayed();
});

When('I remove the first product from the cart', async ({ cartPage }) => {
  allure.feature('Checkout Flow');
  allure.story('Cart Management');
  allure.severity('critical');
  
  await cartPage.removeFirstProduct();
});

Then('the cart should be empty', async ({ cartPage }) => {
  allure.feature('Checkout Flow');
  allure.story('Cart Management');
  allure.severity('normal');
  
  await cartPage.verifyCartIsEmpty();
});

Then('I should see the address details and order review', async ({ checkoutPage }) => {
  allure.feature('Checkout Flow');
  allure.story('Order Review');
  allure.severity('critical');
  
  await checkoutPage.verifyAddressDetailsAndOrderReview();
});

When('I enter a comment {string}', async ({ checkoutPage }, comment: string) => {
  allure.feature('Checkout Flow');
  allure.story('Order Placement');
  allure.severity('normal');
  
  await checkoutPage.enterComment(comment);
});

When('I fill in the payment details', async ({ paymentPage }) => {
  allure.feature('Checkout Flow');
  allure.story('Payment Processing');
  allure.severity('blocker');
  
  await paymentPage.fillPaymentDetails();
});

Then('I should see the order success message', async ({ paymentPage }) => {
  allure.feature('Checkout Flow');
  allure.story('Order Confirmation');
  allure.severity('blocker');
  
  await paymentPage.verifyOrderSuccess();
});

Then('the cart should not be empty', async ({ cartPage }) => {
  allure.feature('Checkout Flow');
  allure.story('Shopping Cart');
  allure.severity('critical');
  
  await cartPage.verifyCartNotEmpty();
});

When('I download the invoice', async ({ paymentPage }) => {
  allure.feature('Checkout Flow');
  allure.story('Invoice Download');
  allure.severity('normal');
  
  await paymentPage.downloadAndVerifyInvoice();
});
