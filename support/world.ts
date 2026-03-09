import { setWorldConstructor, Before, After, IWorldOptions, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';
import { HomePage } from '../pages/home.page';
import { RegisterPage } from '../pages/register.page';
import { LoginPage } from '../pages/login.page';

export class PlaywrightWorld extends World {
  browser!: Browser;
  page!: Page;

  private _homePage?: HomePage;
  private _registerPage?: RegisterPage;
  private _loginPage?: LoginPage;

  get homePage(): HomePage {
    return this._homePage ??= new HomePage(this.page);
  }

  get registerPage(): RegisterPage {
    return this._registerPage ??= new RegisterPage(this.page);
  }

  get loginPage(): LoginPage {
    return this._loginPage ??= new LoginPage(this.page);
  }

  constructor(options: IWorldOptions) {
    super(options);
  }

  async openBrowser(): Promise<void> {
    this.browser = await chromium.launch({ headless: false });
    const context: BrowserContext = await this.browser.newContext({ baseURL: 'https://automationexercise.com' });
    this.page = await context.newPage();
  }

  async closeBrowser(): Promise<void> {
    await this.browser.close();
  }
}

setWorldConstructor(PlaywrightWorld);

Before(async function (this: PlaywrightWorld) {
  await this.openBrowser();
});

After(async function (this: PlaywrightWorld) {
  await this.closeBrowser();
});
