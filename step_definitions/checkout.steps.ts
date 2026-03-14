import { createBdd } from 'playwright-bdd';
import { test } from '../support/fixtures';

const { Then, When } = createBdd(test);

Then('the cart page is displayed', async ({ cartPage }) => {
  await cartPage.verifyCartPageDisplayed();
});

When('I remove the first product from the cart', async ({ cartPage }) => {
  await cartPage.removeFirstProduct();
});

Then('the cart should be empty', async ({ cartPage }) => {
  await cartPage.verifyCartIsEmpty();
});

Then('I should see the address details and order review', async ({ checkoutPage }) => {
  await checkoutPage.verifyAddressDetailsAndOrderReview();
});

When('I enter a comment {string}', async ({ checkoutPage }, comment: string) => {
  await checkoutPage.enterComment(comment);
});

When('I fill in the payment details', async ({ paymentPage }) => {
  await paymentPage.fillPaymentDetails();
});

Then('I should see the order success message', async ({ paymentPage }) => {
  await paymentPage.verifyOrderSuccess();
});

Then('the cart should not be empty', async ({ cartPage }) => {
  await cartPage.verifyCartNotEmpty();
});

When('I download the invoice', async ({ paymentPage }) => {
  await paymentPage.downloadAndVerifyInvoice();
});
