import { createBdd } from 'playwright-bdd';
import { test } from '../support/fixtures';

const { Then, When } = createBdd(test);

Then('the brands should be visible on left side bar', async ({ brandPage }) => {
  await brandPage.verifyBrandsVisible();
});

When('I click on the {string} brand', async ({ brandPage }, brand: string) => {
  await brandPage.clickBrand(brand);
});

Then('I should be on the brand page for {string}', async ({ brandPage }, brand: string) => {
  await brandPage.verifyBrandPage(brand);
});
