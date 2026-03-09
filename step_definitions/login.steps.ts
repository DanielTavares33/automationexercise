import { PlaywrightWorld } from '../support/world';
import { Then } from '@cucumber/cucumber';

Then("I should see the new user signup form", async function (this: PlaywrightWorld) {
  await this.loginPage.verifySignupForm();
});

Then("I enter a valid {string}", async function (this: PlaywrightWorld, input: string) {
  await this.loginPage.signUpForm(input);
});

Then("I should see an error {string}", async function (this: PlaywrightWorld, _message: string) {
  await this.loginPage.verifyEmailExistsError();
});
