import { Locator, Page } from "playwright";

export class RegisterLocators {
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly signupButton: Locator;
    readonly accountInformationForm: Locator;
    readonly genderRadioButton: Locator;
    readonly passwordInput: Locator;
    readonly dayOfBirthSelect: Locator;
    readonly monthOfBirthSelect: Locator;
    readonly yearOfBirthSelect: Locator;
    readonly newsletterCheckbox: Locator;
    readonly offersCheckbox: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly companyInput: Locator;
    readonly address1Input: Locator;
    readonly address2Input: Locator;
    readonly countrySelect: Locator;
    readonly stateInput: Locator;
    readonly cityInput: Locator;
    readonly zipcodeInput: Locator;
    readonly mobileNumberInput: Locator;
    readonly createAccountButton: Locator;
    readonly accountCreatedHeading: Locator;
    readonly continueButton: Locator;
    readonly loggedInAsLink: Locator;

    constructor(page: Page) {
      this.nameInput = page.locator('input[data-qa="name"]');
      this.emailInput = page.locator('input[data-qa="email"]');
      this.signupButton = page.locator('button[data-qa="signup-button"]');
      this.accountInformationForm = page.locator('form[action="/signup"]');
      this.genderRadioButton = page.locator('input[type="radio"][id*="gender"]');
      this.passwordInput = page.locator('input[data-qa="password"]');
      this.dayOfBirthSelect = page.locator('select[data-qa="days"]');
      this.monthOfBirthSelect = page.locator('select[data-qa="months"]');
      this.yearOfBirthSelect = page.locator('select[data-qa="years"]');
      this.newsletterCheckbox = page.locator('input[id="newsletter"]');
      this.offersCheckbox = page.locator('input[id="optin"]');
      this.firstNameInput = page.locator('input[data-qa="first_name"]');
      this.lastNameInput = page.locator('input[data-qa="last_name"]');
      this.companyInput = page.locator('input[data-qa="company"]');
      this.address1Input = page.locator('input[data-qa="address"]');
      this.address2Input = page.locator('input[data-qa="address2"]');
      this.countrySelect = page.locator('select[data-qa="country"]');
      this.stateInput = page.locator('input[data-qa="state"]');
      this.cityInput = page.locator('input[data-qa="city"]');
      this.zipcodeInput = page.locator('input[data-qa="zipcode"]');
      this.mobileNumberInput = page.locator('input[data-qa="mobile_number"]');
      this.createAccountButton = page.locator('button[data-qa="create-account"]');
      this.accountCreatedHeading = page.locator('h2[data-qa="account-created"]');
      this.continueButton = page.locator('a[data-qa="continue-button"]');
      this.loggedInAsLink = page.locator('a:has-text("Logged in as")');
    }
}