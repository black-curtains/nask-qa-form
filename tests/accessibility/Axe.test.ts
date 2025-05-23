import test from '@lib/BaseTest';
import { expect } from "@playwright/test";

test(`Verify Page Accessibility`, async ({ page, makeAxeBuilder }) => {
    await page.goto('/');
    const accessibilityScanResults = await makeAxeBuilder.analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
});