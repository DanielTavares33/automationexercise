import { setWorldConstructor, Before, After, IWorldOptions, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';
import { HomePage } from '../pages/home.page';

export class PlaywrightWorld extends World {
  browser!: Browser;
  page!: Page;
  homePage!: HomePage;

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
  this.homePage = new HomePage(this.page);
});

After(async function (this: PlaywrightWorld) {
  await this.closeBrowser();
});
