import test from '@lib/BaseTest';
import { expect } from '@playwright/test';
test(`Verify Elements Page.`, async ({ page, createAccountPage }) => {
    await createAccountPage.navigateToURL();
    expect(await page.screenshot()).toMatchSnapshot('MainPage.png');
});