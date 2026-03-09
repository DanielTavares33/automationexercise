# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
npm ci

# Install Playwright browsers (required before first run)
npx playwright install chromium

# Run all tests
npm test

# Run tests by tag
npm test -- --tags "@tagname"

# Run a single feature file
npm test -- features/register/register.feature
```

## Architecture

Playwright + Cucumber BDD in TypeScript, targeting [automationexercise.com](https://automationexercise.com).

- `features/` — Gherkin `.feature` files, organized by domain (e.g. `features/register/`, `features/login/`)
- `locators/` — Locator classes per page (e.g. `HomeLocators`). Each class holds `readonly Locator` properties initialized in the constructor.
- `pages/` — Page Object Models (extend `BasePage`). Each page instantiates its locator class and exposes action methods.
- `step_definitions/` — Cucumber step implementations. Use `this.homePage` (and future page instances) from the World.
- `support/world.ts` — `PlaywrightWorld` class: launches Chromium (headless: false), sets `baseURL`, and instantiates page objects in the `Before` hook.

## Key Patterns

**Locator pattern:** locators live in `locators/<page>.locators.ts` as a class with `readonly Locator` fields. Page objects instantiate the locator class: `this.locators = new HomeLocators(page)`.

**World as page object registry:** `PlaywrightWorld` holds `this.page` and page object instances (e.g. `this.homePage`). Page objects are created in the `Before` hook after the browser opens. Step definitions access them via `this.homePage`, typed with `this: PlaywrightWorld`.

**GDPR consent popup:** `visitHomePage()` automatically dismisses the cookie consent popup after navigation. Any new page that navigates to the site should handle this.

**Cucumber config (`cucumber.json`):** uses `requireModule: ts-node/register`. Step definitions are async (`async-await` snippet interface). `support/` loads before `step_definitions/` so the World is registered first.

**Tags:** features use tags for filtering (e.g. `@register`, `@prio-1`, `@valid`). Run subsets with `npm test -- --tags "@tagname"`.

## Workflow Rules

- **Do not run tests after edits.** Never run `npm test` or any test command automatically after making code changes. Only run tests when explicitly asked.
