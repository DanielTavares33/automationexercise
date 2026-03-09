import { BasePage } from "./base.page";
import { LoginLocators } from "../locators/login.locators";
import { Page } from "playwright";
import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

export class LoginPage extends BasePage {
  readonly locators: LoginLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new LoginLocators(page);
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
        await this.locators.signupEmailInput.fill(faker.internet.email());
        break;
      default:
        throw new Error(`Unknown input type: ${input}`);
    }
  }

  async verifySignupForm(): Promise<void> {
    await expect(this.locators.nameInput).toBeVisible();
    await expect(this.locators.signupEmailInput).toBeVisible();
    await expect(this.locators.signupButton).toBeVisible();
  }
}
