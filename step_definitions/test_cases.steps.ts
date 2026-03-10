import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../support/fixtures';

const { Then } = createBdd(test);

Then('I should be on the test cases page', async ({ page }) => {
  await expect(page).toHaveURL('https://automationexercise.com/test_cases');
});
