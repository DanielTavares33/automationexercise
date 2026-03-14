import { createBdd } from 'playwright-bdd';
import { test } from '../support/fixtures';
import { allure } from '../support/allure-helpers';

const { Then, When } = createBdd(test);

Then('the category sidebar should be visible', async ({ categoryPage }) => {
  allure.feature('Product Management');
  allure.story('Category Navigation');
  allure.severity('normal');
  
  await categoryPage.verifyCategorySidebarVisible();
});

When('I expand the {string} category', async ({ categoryPage }, category: string) => {
  allure.feature('Product Management');
  allure.story('Category Navigation');
  allure.severity('normal');
  
  await categoryPage.expandCategory(category);
});

When('I click on the {string} sub-category under {string}', async ({ categoryPage }, subCategory: string, category: string) => {
  allure.feature('Product Management');
  allure.story('Category Navigation');
  allure.severity('normal');
  
  await categoryPage.clickSubCategory(category, subCategory);
});

Then('I should be on the category products page', async ({ categoryPage }) => {
  allure.feature('Product Management');
  allure.story('Category Products');
  allure.severity('normal');
  
  await categoryPage.verifyCategoryPageDisplayed();
});
