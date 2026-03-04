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

# Run a single feature file
npx cucumber-js features/my_feature.feature
```

## Architecture

Playwright + Cucumber BDD in TypeScript, targeting [automationexercise.com](https://automationexercise.com).

- `features/` — Gherkin `.feature` files only
- `pages/` — Page Object Models (extend `BasePage`)
- `step_definitions/` — Cucumber step implementations (use `this.page`)
- `support/world.ts` — Cucumber World class: launches Chromium, sets `baseURL`, exposes `this.page` and `this.browser` to all steps via Before/After hooks

**Page Object pattern:** each page class extends `BasePage`, defines locators in the constructor, and exposes action methods. Step definitions instantiate page objects with `this.page` from the World.

**Cucumber config (`cucumber.json`):** uses `ts-node/register` to run TypeScript directly. Step definitions are async (`async-await` snippet interface). `support/` is loaded before `step_definitions/` so the World is registered first.
