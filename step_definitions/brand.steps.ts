import { createBdd } from 'playwright-bdd';
import { test } from '../support/fixtures';
import { allure } from '../support/allure-helpers';

const { Then, When } = createBdd(test);

Then('the brands should be visible on left side bar', async ({ brandPage }) => {
  allure.feature('Product Management');
  allure.story('Brand Navigation');
  allure.severity('normal');
  
  await brandPage.verifyBrandsVisible();
});

When('I click on the {string} brand', async ({ brandPage }, brand: string) => {
  allure.feature('Product Management');
  allure.story('Brand Navigation');
  allure.severity('normal');
  
  await brandPage.clickBrand(brand);
});

Then('I should be on the brand page for {string}', async ({ brandPage }, brand: string) => {
  allure.feature('Product Management');
  allure.story('Brand Products');
  allure.severity('normal');
  
  await brandPage.verifyBrandPage(brand);
});
