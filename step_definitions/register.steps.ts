import { Then, When } from "@cucumber/cucumber";
import { PlaywrightWorld } from "../support/world";

Then("I fill in the account information form", async function (this: PlaywrightWorld) {
  await this.registerPage.fillAccountInformationForm();
});

Then("I should see the \"ENTER ACCOUNT INFORMATION\" form", async function (this: PlaywrightWorld) {
  await this.registerPage.verifyAccountInformationForm();
});

When("I click the {string} button", async function (this: PlaywrightWorld, buttonText: string) {
  switch (buttonText) {
    case "Create Account":
      await this.registerPage.clickCreateAccountButton();
      break;
    case "Continue":
      await this.registerPage.clickContinueButton();
      break;
    default:
      throw new Error(`Unknown button: ${buttonText}`);
  }
});

Then("I should see the \"ACCOUNT CREATED!\" message", async function (this: PlaywrightWorld) {
  await this.registerPage.verifyAccountCreated();
});

Then("I should be logged in as the new user", async function (this: PlaywrightWorld) {
  await this.registerPage.verifyLoggedIn();
});
