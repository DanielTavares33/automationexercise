# Automation Exercise

E2E test automation for [automationexercise.com](https://automationexercise.com) using Playwright and Cucumber (BDD).

## Stack

- [Playwright](https://playwright.dev/) — browser automation
- [Cucumber.js](https://github.com/cucumber/cucumber-js) — BDD test runner
- TypeScript

## Project Structure

```
features/           # Gherkin feature files (.feature)
pages/              # Page Object Models
step_definitions/   # Cucumber step implementations
support/
  world.ts          # Browser lifecycle and shared context
```

## Setup

```bash
npm install
npx playwright install chromium
```

## Running Tests

```bash
# Run all tests
npm test

# Run a single feature file
npx cucumber-js features/my_feature.feature
```

## Writing Tests

1. Add a `.feature` file in `features/`
2. Add a page object in `pages/` extending `BasePage`
3. Add step definitions in `step_definitions/` using `this.page` from the Cucumber World
