import { PlaywrightWorld } from '../support/world';
import { Then } from '@cucumber/cucumber';

Then("I should see the new user signup form", async function (this: PlaywrightWorld) {
  await this.loginPage.verifySignupForm();
});

Then("I enter a valid {string}", async function (this: PlaywrightWorld, input: string) {
  await this.loginPage.signUpForm(input);
});
