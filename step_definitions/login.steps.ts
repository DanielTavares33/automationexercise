import { PlaywrightWorld } from '../support/world';
import { Then, When } from '@cucumber/cucumber';

Then("I should see the new user signup form", async function (this: PlaywrightWorld) {
  await this.loginPage.verifySignupForm();
});

Then("I enter a valid {string}", async function (this: PlaywrightWorld, input: string) {
  await this.loginPage.signUpForm(input);
});

Then("I should see an error {string}", async function (this: PlaywrightWorld, _message: string) {
  await this.loginPage.verifyEmailExistsError();
});

Then("I should see the login form", async function (this: PlaywrightWorld) {
  await this.loginPage.verifyLoginForm();
});

When("I fill in the login form", async function (this: PlaywrightWorld) {
  await this.loginPage.fillLoginForm();
});

Then("I should be logged in as the user", async function (this: PlaywrightWorld) {
  await this.loginPage.verifyLoggedIn();
});

Then("I should see the {string} message", async function (this: PlaywrightWorld, _message: string) {
  await this.loginPage.verifyAccountDeleted();
});
