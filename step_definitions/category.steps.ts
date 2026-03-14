import { createBdd } from 'playwright-bdd';
import { test } from '../support/fixtures';

const { Then, When } = createBdd(test);

Then('the category sidebar should be visible', async ({ categoryPage }) => {
  await categoryPage.verifyCategorySidebarVisible();
});

When('I expand the {string} category', async ({ categoryPage }, category: string) => {
  await categoryPage.expandCategory(category);
});

When('I click on the {string} sub-category under {string}', async ({ categoryPage }, subCategory: string, category: string) => {
  await categoryPage.clickSubCategory(category, subCategory);
});

Then('I should be on the category products page', async ({ categoryPage }) => {
  await categoryPage.verifyCategoryPageDisplayed();
});
