import { test } from '@playwright/test';

/**
 * Allure annotations for enhanced reporting.
 * 
 * Usage in step definitions:
 * ```typescript
 * import { allure } from '../support/allure-helpers';
 * 
 * Given('I am on the login page', async ({ loginPage }) => {
 *   allure.feature('Authentication');
 *   allure.story('User Login');
 *   allure.severity('critical');
 *   
 *   await loginPage.visitLoginPage();
 * });
 * ```
 */
export const allure = {
  /**
   * Add description to test
   * @param description - Test description text
   */
  description: (description: string): void => {
    test.info().annotations.push({ type: 'description', description });
  },

  /**
   * Set test severity level
   * @param severity - Priority level (blocker, critical, normal, minor, trivial)
   */
  severity: (severity: 'blocker' | 'critical' | 'normal' | 'minor' | 'trivial'): void => {
    test.info().annotations.push({ type: 'severity', description: severity });
  },

  /**
   * Add issue/bug link
   * @param issueId - Issue identifier
   * @param url - Optional custom URL (defaults to GitHub issues)
   */
  issue: (issueId: string, url?: string): void => {
    const issueUrl = url || `https://github.com/your-org/automationexercise/issues/${issueId}`;
    test.info().annotations.push({ 
      type: 'issue', 
      description: issueUrl
    });
  },

  /**
   * Add feature tag for grouping tests by feature area
   * @param feature - Feature name
   */
  feature: (feature: string): void => {
    test.info().annotations.push({ type: 'feature', description: feature });
  },

  /**
   * Add story tag for grouping tests by user story
   * @param story - User story name
   */
  story: (story: string): void => {
    test.info().annotations.push({ type: 'story', description: story });
  },

  /**
   * Add custom tag
   * @param tag - Tag name
   */
  tag: (tag: string): void => {
    test.info().annotations.push({ type: 'tag', description: tag });
  },

  /**
   * Add owner/assignee information
   * @param owner - Owner name
   */
  owner: (owner: string): void => {
    test.info().annotations.push({ type: 'owner', description: owner });
  },

  /**
   * Attach file/screenshot/data to report
   * @param name - Attachment name
   * @param content - Content to attach (Buffer or string)
   * @param type - MIME type (e.g., 'text/plain', 'application/json', 'image/png')
   */
  attach: (name: string, content: Buffer | string, type: string): void => {
    const body = typeof content === 'string' ? Buffer.from(content) : content;
    test.info().attachments.push({ 
      name, 
      contentType: type, 
      body 
    });
  },

  /**
   * Add step information for better reporting
   * @param stepName - Step description
   * @param body - Function to execute as a step
   */
  step: async <T>(stepName: string, body: () => Promise<T>): Promise<T> => {
    return await test.step(stepName, body);
  },
};
