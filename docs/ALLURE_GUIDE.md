# Allure Report Usage Guide

Complete guide for using Allure reports in the Playwright BDD test automation project.

## Table of Contents
- [Overview](#overview)
- [Local Development](#local-development)
- [Adding Annotations](#adding-annotations)
- [CI/CD Integration](#cicd-integration)
- [GitHub Pages Setup](#github-pages-setup)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

## Overview

Allure provides enhanced test reporting with:
- 📊 Test execution trends and analytics
- 📈 Historical data tracking
- 🔍 Flaky test detection
- 📋 BDD scenario step-by-step breakdown
- 📷 Automatic screenshot/video attachments
- 🏷️ Categorization by features, severity, and tags

## Local Development

### Generate Report After Tests

After running any test suite, you can generate an Allure report:

```bash
# Run tests first (generates allure-results/)
npm test

# Generate static HTML report
npm run allure:generate

# Open the report in browser
npm run allure:open
```

### Quick View (No Build)

For faster feedback during development:

```bash
# Run tests
npm test

# Generate and serve report in one command
npm run allure:serve
```

This starts a local server and opens the report automatically.

### All-in-One Command

```bash
# Run tests + generate + open report
npm run test:allure
```

## Adding Annotations

Annotations enhance Allure reports with metadata, categorization, and context.

### Import the Helper

```typescript
import { allure } from '../support/allure-helpers';
```

### In Step Definitions

Add annotations at the beginning of step implementations:

```typescript
import { createBdd } from 'playwright-bdd';
import { test } from '../support/fixtures';
import { allure } from '../support/allure-helpers';

const { Given, When, Then } = createBdd(test);

Given('I am on the login page', async ({ loginPage }) => {
  // Add Allure metadata
  allure.feature('Authentication');
  allure.story('User Login');
  allure.severity('critical');
  allure.tag('smoke');
  
  // Your test code
  await loginPage.visitLoginPage();
});

When('I login with valid credentials', async ({ loginPage }) => {
  allure.description('Login using test@example.com account');
  allure.owner('QA Team');
  
  await loginPage.enterEmail('test@example.com');
  await loginPage.enterPassword('password123');
  await loginPage.clickLoginButton();
});

Then('I should see my account dashboard', async ({ accountPage }) => {
  allure.issue('123', 'https://github.com/your-org/repo/issues/123');
  
  await accountPage.verifyAccountDashboard();
});
```

### Available Annotations

#### `allure.feature(name)`
Groups tests by feature area.

```typescript
allure.feature('User Management');
allure.feature('Product Catalog');
allure.feature('Checkout Flow');
```

#### `allure.story(name)`
Groups tests by user story or sub-feature.

```typescript
allure.story('User Registration');
allure.story('Password Reset');
allure.story('Login Flow');
```

#### `allure.severity(level)`
Sets test priority/criticality.

**Levels:**
- `blocker` — Critical path, blocks testing
- `critical` — Essential functionality
- `normal` — Standard features (default)
- `minor` — Minor issues
- `trivial` — UI/cosmetic

```typescript
allure.severity('blocker');   // Critical path
allure.severity('critical');  // Core functionality
allure.severity('normal');    // Standard test
allure.severity('minor');     // Edge case
allure.severity('trivial');   // UI polish
```

#### `allure.tag(tag)`
Adds custom tags for filtering.

```typescript
allure.tag('api');
allure.tag('ui');
allure.tag('integration');
```

#### `allure.description(text)`
Adds detailed test description.

```typescript
allure.description('This test verifies that users can login with valid credentials and are redirected to the dashboard.');
```

#### `allure.issue(id, url?)`
Links test to GitHub issue or bug tracker.

```typescript
// Auto-generates GitHub URL
allure.issue('456');

// Custom URL
allure.issue('BUG-789', 'https://jira.example.com/browse/BUG-789');
```

#### `allure.owner(name)`
Assigns test owner/maintainer.

```typescript
allure.owner('QA Team');
allure.owner('John Doe');
```

#### `allure.attach(name, content, type)`
Attaches custom data to report.

```typescript
// Attach text
allure.attach('API Response', JSON.stringify(response), 'application/json');

// Attach screenshot (custom)
const screenshot = await page.screenshot();
allure.attach('Custom Screenshot', screenshot, 'image/png');
```

**Note:** Screenshots and videos are automatically attached on failure.

#### `allure.step(stepName, body)`
Creates custom test steps for better reporting.

```typescript
await allure.step('Verify user profile data', async () => {
  await expect(page.locator('.username')).toHaveText('John Doe');
  await expect(page.locator('.email')).toHaveText('john@example.com');
});
```

## CI/CD Integration

Allure reports are automatically generated in all GitHub Actions workflows.

### Workflows with Allure

1. **PR Validation** (`.github/workflows/pr-tests.yml`)
   - Runs smoke tests
   - Generates Allure report
   - Uploads as artifact

2. **Manual Test Execution** (`.github/workflows/manual-tests.yml`)
   - Runs custom test suite
   - Generates Allure report
   - Uploads as artifact

3. **Scheduled Regression** (`.github/workflows/scheduled-tests.yml`)
   - Runs nightly regression
   - Generates Allure report
   - Uploads as artifact
   - Triggers history workflow

4. **Allure History** (`.github/workflows/allure-history.yml`)
   - Generates report with historical trends
   - Publishes to GitHub Pages (optional)

### Downloading Reports from CI

1. Go to GitHub Actions tab
2. Select a workflow run
3. Scroll to "Artifacts" section
4. Download `allure-report-*` artifact
5. Extract and open `index.html` in browser

## GitHub Pages Setup

Enable historical Allure reports with GitHub Pages.

### Prerequisites

1. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from branch `gh-pages`
   - Click Save

2. **Configure Workflow Permissions:**
   - Settings → Actions → General
   - Workflow permissions: "Read and write permissions"
   - Save

### How It Works

1. Scheduled regression tests run nightly
2. Allure History workflow triggers automatically
3. Report is generated with last 20 runs history
4. Published to GitHub Pages at:
   ```
   https://[your-username].github.io/automationexercise/
   ```

### Manual Trigger

You can manually trigger the Allure History workflow:

1. Go to Actions → "Allure Report with History"
2. Click "Run workflow"
3. Wait for completion
4. Visit GitHub Pages URL

## Best Practices

### 1. Use Consistent Annotations

Always add `feature`, `story`, and `severity` to important tests:

```typescript
Given('I perform critical action', async ({ page }) => {
  allure.feature('Core Feature');
  allure.story('Critical User Journey');
  allure.severity('critical');
  
  // test code
});
```

### 2. Severity Guidelines

- **blocker**: Login, signup, payment processing
- **critical**: Core features (product search, cart, checkout)
- **normal**: Standard features (filters, sorting)
- **minor**: Edge cases (unusual inputs)
- **trivial**: UI polish (tooltips, animations)

### 3. Link Issues for Bug Tests

When testing bug fixes, link the issue:

```typescript
allure.issue('456');  // GitHub issue #456
```

### 4. Use Descriptive Feature Names

Group logically:

```typescript
allure.feature('User Management');    // Good
allure.feature('Login');              // Too specific

allure.story('Login Flow');           // Good for story
```

### 5. Add Descriptions for Complex Tests

```typescript
allure.description(`
  This test verifies the complete checkout flow:
  1. Add product to cart
  2. Proceed to checkout
  3. Fill shipping information
  4. Complete payment
  5. Verify order confirmation
`);
```

## Troubleshooting

### Report Not Generating

**Issue:** `npm run allure:generate` fails

**Solution:**
1. Ensure tests ran first: `npm test`
2. Check `allure-results/` exists
3. Verify `allure-commandline` is installed:
   ```bash
   npm install --save-dev allure-commandline
   ```

### Empty Report

**Issue:** Allure report shows no tests

**Solution:**
1. Verify tests actually ran successfully
2. Check `allure-results/` contains `.json` files
3. Ensure `allure-playwright` reporter is configured in `playwright.config.ts`

### Annotations Not Showing

**Issue:** Allure annotations don't appear in report

**Solution:**
1. Verify you imported from correct path:
   ```typescript
   import { allure } from '../support/allure-helpers';
   ```
2. Ensure annotations are called BEFORE test actions
3. Regenerate report: `npm run allure:generate`

### GitHub Pages Not Publishing

**Issue:** Reports not visible on GitHub Pages

**Solution:**
1. Verify GitHub Pages is enabled (Settings → Pages)
2. Check workflow permissions (Settings → Actions → General)
3. Ensure `gh-pages` branch exists
4. Wait 5-10 minutes after workflow completes
5. Check workflow logs for errors

### History Not Working

**Issue:** Historical trends not showing

**Solution:**
1. Ensure GitHub Pages is enabled
2. Run Allure History workflow at least 2 times
3. Verify `gh-pages` branch has `allure-history/` folder
4. Check that regression tests are running regularly

## Additional Resources

- [Allure Official Documentation](https://docs.qameta.io/allure/)
- [Allure Playwright Integration](https://www.npmjs.com/package/allure-playwright)
- [Allure Report Features](https://docs.qameta.io/allure-report/)

## Support

For issues specific to this project:
1. Check this guide first
2. Review example step definitions in `step_definitions/`
3. Check CI workflow logs in GitHub Actions
4. Consult `AGENTS.md` for additional commands
