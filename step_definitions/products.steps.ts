import { createBdd } from 'playwright-bdd';
import { test } from '../support/fixtures';

const { When, Then } = createBdd(test);

Then('I should be on the all products page', async ({ productsPage }) => {
  await productsPage.verifyAllProductsPage();
});

Then('the products list should be visible', async ({ productsPage }) => {
  await productsPage.verifyProductsListVisible();
});

When('I click on {string} of the first product', async ({ productsPage }, _label: string) => {
  await productsPage.clickFirstViewProduct();
});

Then('I should be on the product detail page', async ({ productsPage }) => {
  await productsPage.verifyProductDetailPage();
});

Then('I should see the product details', async ({ productsPage }) => {
  await productsPage.verifyProductDetails();
});
