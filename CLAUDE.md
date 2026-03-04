# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
npm ci

# Install Playwright browsers (required before first run)
npx playwright install --with-deps

# Run Cucumber/BDD tests
npm test

# Run all Playwright tests
npx playwright test

# Run a single Playwright test file
npx playwright test tests/example.spec.ts

# Run Playwright tests in a specific browser
npx playwright test --project=chromium

# Run a single Cucumber feature file
npx cucumber-js features/is_it_friday_yet.feature
```

## Architecture

This project has **two parallel test frameworks** that coexist independently:

### Playwright (`tests/`)
- TypeScript spec files (`*.spec.ts`) using `@playwright/test`
- Configured via `playwright.config.ts` — runs against Chromium, Firefox, and WebKit
- This is what CI (`.github/workflows/playwright.yml`) runs on push/PR

### Cucumber BDD (`features/`)
- Gherkin feature files (`*.feature`) describe scenarios in plain English
- Step definitions in `features/step_definitions/` are written in CommonJS JavaScript
- `cucumber.json` configures the runner with `snippetInterface: "synchronous"` — step definitions must use synchronous style (not async/await or callbacks)
- Run via `npm test` (`cucumber-js`)

Step definitions use the Cucumber `this` context to pass state between steps (Given/When/Then share `this.today`, `this.actualAnswer`, etc.).
