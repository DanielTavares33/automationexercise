import { createBdd } from 'playwright-bdd';
import { test } from '../support/fixtures';
import { allure } from '../support/allure-helpers';

const { When, Then } = createBdd(test);

When('I set the product quantity to {int}', async ({ productsPage }, qty: number) => {
  allure.feature('Product Management');
  allure.story('Shopping Cart');
  allure.severity('critical');
  
  await productsPage.setQuantity(qty);
});

When('I add the product to cart', async ({ productsPage }) => {
  allure.feature('Product Management');
  allure.story('Shopping Cart');
  allure.severity('critical');
  
  await productsPage.addToCartFromDetail();
});

Then('the cart should contain the product with quantity {int}', async ({ cartPage }, qty: number) => {
  allure.feature('Product Management');
  allure.story('Shopping Cart');
  allure.severity('critical');
  
  await cartPage.verifyProductQuantity(qty);
});

When('I hover over the first product and add it to cart', async ({ productsPage }) => {
  allure.feature('Product Management');
  allure.story('Shopping Cart');
  allure.severity('critical');
  
  await productsPage.hoverAndAddToCart(0);
});

When('I hover over the second product and add it to cart', async ({ productsPage }) => {
  allure.feature('Product Management');
  allure.story('Shopping Cart');
  allure.severity('critical');
  
  await productsPage.hoverAndAddToCart(1);
});

Then('both products should be added to the cart', async ({ cartPage }) => {
  allure.feature('Product Management');
  allure.story('Shopping Cart');
  allure.severity('critical');
  
  await cartPage.verifyProductCount(2);
});

Then('their prices, quantity and total price should be correct', async ({ cartPage }) => {
  allure.feature('Product Management');
  allure.story('Shopping Cart');
  allure.severity('critical');
  
  await cartPage.verifyCartDetails();
});

Then('I should be on the all products page', async ({ productsPage }) => {
  allure.feature('Product Management');
  allure.story('Product Catalog');
  allure.severity('critical');
  
  await productsPage.verifyAllProductsPage();
});

Then('the products list should be visible', async ({ productsPage }) => {
  allure.feature('Product Management');
  allure.story('Product Catalog');
  allure.severity('critical');
  
  await productsPage.verifyProductsListVisible();
});

When('I click on {string} of the first product', async ({ productsPage }, _label: string) => {
  allure.feature('Product Management');
  allure.story('Product Details');
  allure.severity('critical');
  
  await productsPage.clickFirstViewProduct();
});

Then('I should be on the product detail page', async ({ productsPage }) => {
  allure.feature('Product Management');
  allure.story('Product Details');
  allure.severity('critical');
  
  await productsPage.verifyProductDetailPage();
});

Then('I should see the product details', async ({ productsPage }) => {
  allure.feature('Product Management');
  allure.story('Product Details');
  allure.severity('critical');
  
  await productsPage.verifyProductDetails();
});

When('I search for product {string}', async ({ productsPage }, productName: string) => {
  allure.feature('Product Management');
  allure.story('Product Search');
  allure.severity('critical');
  
  await productsPage.searchProduct(productName);
});

Then('the searched products heading should be visible', async ({ productsPage }) => {
  allure.feature('Product Management');
  allure.story('Product Search');
  allure.severity('normal');
  
  await productsPage.verifySearchedProductsHeading();
});

Then('all searched products should be visible', async ({ productsPage }) => {
  allure.feature('Product Management');
  allure.story('Product Search');
  allure.severity('critical');
  
  await productsPage.verifySearchedProductsVisible();
});

When('I add all searched products to cart', async ({ productsPage }) => {
  allure.feature('Product Management');
  allure.story('Shopping Cart');
  allure.severity('critical');
  
  await productsPage.addAllSearchedProductsToCart();
});

Then('I should see the {string} review section', async ({ productsPage }, _section: string) => {
  allure.feature('Product Management');
  allure.story('Product Reviews');
  allure.severity('normal');
  
  await productsPage.verifyWriteYourReviewVisible();
});

When('I fill in the review form', async ({ productsPage }) => {
  allure.feature('Product Management');
  allure.story('Product Reviews');
  allure.severity('normal');
  
  await productsPage.fillReviewForm();
});

When('I submit the review', async ({ productsPage }) => {
  allure.feature('Product Management');
  allure.story('Product Reviews');
  allure.severity('normal');
  
  await productsPage.submitReview();
});

Then('I should see the review success message', async ({ productsPage }) => {
  allure.feature('Product Management');
  allure.story('Product Reviews');
  allure.severity('normal');
  
  await productsPage.verifyReviewSuccess();
});
