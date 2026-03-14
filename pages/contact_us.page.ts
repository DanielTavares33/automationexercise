import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { BasePage } from './base.page';
import { ContactUsLocators } from '../locators/contact_us.locators';
import path from 'path';

export class ContactUsPage extends BasePage {
  readonly locators: ContactUsLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new ContactUsLocators(page);
  }

  async verifyGetInTouchHeading(): Promise<void> {
    await expect(this.locators.getInTouchHeading).toBeVisible();
  }

  async fillContactForm(): Promise<void> {
    await this.locators.nameInput.fill(faker.person.fullName());
    await this.locators.emailInput.fill(faker.internet.email());
    await this.locators.subjectInput.fill(faker.lorem.sentence());
    await this.locators.messageInput.fill(faker.lorem.paragraph());
  }

  async uploadFile(): Promise<void> {
    const filePath = path.resolve(__dirname, '../fixtures/test-file.txt');
    await this.locators.fileInput.setInputFiles(filePath);
  }

  async submitForm(): Promise<void> {
    // Wait for the form's jQuery submit handler to be attached
    await this.page.waitForLoadState('networkidle');
    
    await Promise.all([
      this.page.waitForEvent('dialog').then(dialog => dialog.accept()),
      this.locators.submitButton.click()
    ]);
  }

  async verifySuccessMessage(message: string): Promise<void> {
    await expect(this.locators.successMessage).toBeVisible();
    await expect(this.locators.successMessage).toContainText(message);
  }

  async clickHomeButton(): Promise<void> {
    await this.locators.homeButton.click();
  }

  async verifyHomePage(): Promise<void> {
    await expect(this.page).toHaveURL('https://automationexercise.com/');
  }
}
