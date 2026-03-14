import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../support/fixtures';
import { allure } from '../support/allure-helpers';

const { Then } = createBdd(test);

Then('I should be on the test cases page', async ({ page }) => {
  allure.feature('Navigation');
  allure.story('Test Cases Page');
  allure.severity('minor');
  
  await expect(page).toHaveURL('https://automationexercise.com/test_cases');
});
