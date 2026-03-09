import { Given, When } from '@cucumber/cucumber';
import { PlaywrightWorld } from '../support/world';

Given("I visit the home page", async function (this: PlaywrightWorld) {
  await this.homePage.visitHomePage();
});

When("I navigate to the login page", async function (this: PlaywrightWorld) {
  await this.page.goto('/login');
});

When("I click on the {string} button", async function (this: PlaywrightWorld, buttonText: string) {
  switch (buttonText) {
    case "Signup / Login":
      await this.homePage.clickButton();
      break;
    case "Signup":
      await this.loginPage.clickSignupButton();
      break;
    case "Login":
      await this.loginPage.clickLoginButton();
      break;
    case "Delete Account":
      await this.loginPage.clickDeleteAccount();
      break;
    default:
      throw new Error(`Unknown button: ${buttonText}`);
  }
});
