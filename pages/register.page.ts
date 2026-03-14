import { Locator, Page } from "playwright";
import { expect } from "@playwright/test";
import { BasePage } from "./base.page";
import { RegisterLocators } from "../locators/register.locators";
import { faker } from "@faker-js/faker";

export class RegisterPage extends BasePage {
  private static readonly TEST_PASSWORD = 'Test1234!';
  readonly locators: RegisterLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new RegisterLocators(page);
  }

  async fillAccountInformationForm(): Promise<void> {
    const data = await this.buildAccountData();

    await this.locators.genderRadioButton.nth(data.genderIndex).click();
    await this.locators.passwordInput.fill(data.password);
    await this.locators.dayOfBirthSelect.selectOption({ label: data.day });
    await this.locators.monthOfBirthSelect.selectOption({ label: data.month });
    await this.locators.yearOfBirthSelect.selectOption({ label: data.year });
    await this.locators.newsletterCheckbox.check();
    await this.locators.offersCheckbox.check();
    await this.locators.firstNameInput.fill(data.firstName);
    await this.locators.lastNameInput.fill(data.lastName);
    await this.locators.companyInput.fill(data.company);
    await this.locators.address1Input.fill(data.address1);
    await this.locators.address2Input.fill(data.address2);
    await this.locators.countrySelect.selectOption({ label: data.country });
    await this.locators.stateInput.fill(data.state);
    await this.locators.cityInput.fill(data.city);
    await this.locators.zipcodeInput.fill(data.zipcode);
    await this.locators.mobileNumberInput.fill(data.mobileNumber);
  }

  async verifyAccountInformationForm(): Promise<void> {
    await this.locators.accountInformationForm.isVisible();
  }

  async clickCreateAccountButton(): Promise<void> {
    await this.locators.createAccountButton.click();
    await this.page.waitForURL('**/account_created');
  }

  async verifyAccountCreated(): Promise<void> {
    await expect(this.locators.accountCreatedHeading).toBeVisible();
  }

  async clickContinueButton(): Promise<void> {
    await this.locators.continueButton.click();
  }

  async verifyLoggedIn(): Promise<void> {
    await expect(this.locators.loggedInAsLink).toBeVisible();
  }

  private async randomOption(select: Locator): Promise<string> {
    const options = await select.locator('option:not([value=""])').allTextContents();
    return faker.helpers.arrayElement(options);
  }

  private async buildAccountData() {
    return {
      genderIndex:  faker.number.int({ min: 0, max: 1 }),
      password:     RegisterPage.TEST_PASSWORD,
      day:          String(faker.number.int({ min: 1, max: 28 })),
      month:        await this.randomOption(this.locators.monthOfBirthSelect),
      year:         await this.randomOption(this.locators.yearOfBirthSelect),
      firstName:    faker.person.firstName(),
      lastName:     faker.person.lastName(),
      company:      faker.company.name(),
      address1:     faker.location.streetAddress(),
      address2:     faker.location.secondaryAddress(),
      country:      await this.randomOption(this.locators.countrySelect),
      state:        faker.location.state(),
      city:         faker.location.city(),
      zipcode:      faker.location.zipCode(),
      mobileNumber: faker.phone.number(),
    };
  }
}
