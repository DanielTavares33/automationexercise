import { createBdd } from 'playwright-bdd';
import { test } from '../support/fixtures';

const { When, Then } = createBdd(test);

When('I set the product quantity to {int}', async ({ productsPage }, qty: number) => {
  await productsPage.setQuantity(qty);
});

When('I add the product to cart', async ({ productsPage }) => {
  await productsPage.addToCartFromDetail();
});

Then('the cart should contain the product with quantity {int}', async ({ cartPage }, qty: number) => {
  await cartPage.verifyProductQuantity(qty);
});

When('I hover over the first product and add it to cart', async ({ productsPage }) => {
  await productsPage.hoverAndAddToCart(0);
});

When('I hover over the second product and add it to cart', async ({ productsPage }) => {
  await productsPage.hoverAndAddToCart(1);
});

Then('both products should be added to the cart', async ({ cartPage }) => {
  await cartPage.verifyProductCount(2);
});

Then('their prices, quantity and total price should be correct', async ({ cartPage }) => {
  await cartPage.verifyCartDetails();
});

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

When('I search for product {string}', async ({ productsPage }, productName: string) => {
  await productsPage.searchProduct(productName);
});

Then('the searched products heading should be visible', async ({ productsPage }) => {
  await productsPage.verifySearchedProductsHeading();
});

Then('all searched products should be visible', async ({ productsPage }) => {
  await productsPage.verifySearchedProductsVisible();
});

When('I add all searched products to cart', async ({ productsPage }) => {
  await productsPage.addAllSearchedProductsToCart();
});

Then('I should see the {string} review section', async ({ productsPage }, _section: string) => {
  await productsPage.verifyWriteYourReviewVisible();
});

When('I fill in the review form', async ({ productsPage }) => {
  await productsPage.fillReviewForm();
});

When('I submit the review', async ({ productsPage }) => {
  await productsPage.submitReview();
});

Then('I should see the review success message', async ({ productsPage }) => {
  await productsPage.verifyReviewSuccess();
});
