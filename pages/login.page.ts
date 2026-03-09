import { BasePage } from "./base.page";
import { LoginLocators } from "../locators/login.locators";
import { Page } from "playwright";
import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

export class LoginPage extends BasePage {
  private static readonly TEST_PASSWORD = 'Test1234!';
  private _registeredEmail?: string;

  readonly locators: LoginLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new LoginLocators(page);
  }

  async verifyLoginForm(): Promise<void> {
    await expect(this.locators.loginFormHeading).toBeVisible();
  }

  async fillLoginForm(): Promise<void> {
    await this.locators.loginEmailInput.fill(this._registeredEmail!);
    await this.locators.passwordInput.fill(LoginPage.TEST_PASSWORD);
  }

  async clickLoginButton(): Promise<void> {
    await this.locators.loginButton.click();
  }

  async verifyLoggedIn(): Promise<void> {
    await expect(this.locators.loggedInAsLink).toBeVisible();
  }

  async clickDeleteAccount(): Promise<void> {
    await this.locators.deleteAccountLink.click();
  }

  async verifyAccountDeleted(): Promise<void> {
    await expect(this.locators.accountDeletedHeading).toBeVisible();
  }

  async clickSignupButton(): Promise<void> {
    await this.locators.signupButton.click();
  }

  async signUpForm(input: string): Promise<void> {
    switch (input) {
      case "name":
        await this.locators.nameInput.fill(faker.person.fullName());
        break;
      case "email address":
        this._registeredEmail = faker.internet.email();
        await this.locators.signupEmailInput.fill(this._registeredEmail);
        break;
      case "existing email address":
        await this.locators.signupEmailInput.fill("test@test.com");
        break;
      default:
        throw new Error(`Unknown input type: ${input}`);
    }
  }

  async verifyEmailExistsError(): Promise<void> {
    await expect(this.locators.emailExistsError).toBeVisible();
  }

  async verifySignupForm(): Promise<void> {
    await expect(this.locators.nameInput).toBeVisible();
    await expect(this.locators.signupEmailInput).toBeVisible();
    await expect(this.locators.signupButton).toBeVisible();
  }
}
