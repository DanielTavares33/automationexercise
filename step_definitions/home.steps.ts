import { Given, When } from '@cucumber/cucumber';
import { PlaywrightWorld } from '../support/world';

When('I click on the {string} button', async function (this: PlaywrightWorld, buttonText: string) {
  await this.homePage.clickButton();
});

Given('I visit the home page', async function (this: PlaywrightWorld) {
  await this.homePage.visitHomePage();
});