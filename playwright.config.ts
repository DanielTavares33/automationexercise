import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: ['support/fixtures.ts', 'step_definitions/**/*.ts'],
});

export default defineConfig({
  testDir,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.WORKERS ? parseInt(process.env.WORKERS, 10) : 4,
  reporter: process.env.CI 
    ? [
        ['html'], 
        ['github'], 
        ['list'],
        ['allure-playwright', {
          outputFolder: 'allure-results',
          detail: true,
          suiteTitle: true,
        }]
      ]
    : [
        ['html'],
        ['allure-playwright', {
          outputFolder: 'allure-results',
          detail: true,
          suiteTitle: true,
        }]
      ],
  expect: {
    timeout: 10000,
  },
  use: {
    baseURL: 'https://automationexercise.com',
    headless: process.env.HEADLESS === 'true',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
