import { TestInfo, test as baseTest } from '@playwright/test';
import { CreateAccountPage } from '@pages/CreateAccountPage';
import { WebActions } from '@lib/WebActions';
import AxeBuilder from '@axe-core/playwright';
import {AccountCreatedPage} from "@pages/AccountCreatedPage";

const test = baseTest.extend<{
    webActions: WebActions;
    createAccountPage: CreateAccountPage;
    makeAxeBuilder: AxeBuilder;
    testInfo: TestInfo;
    accountCreatedPage: AccountCreatedPage;

}>({
    webActions: async ({ page, context }, use) => {
        await use(new WebActions(page, context));
    },
    createAccountPage: async ({ page, context }, use) => {
        await use(new CreateAccountPage(page, context));
    },
    accountCreatedPage: async ({ page, context }, use) => {
        await use(new AccountCreatedPage(page, context));
    },
    makeAxeBuilder: async ({ page }, use) => {
        await use(new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
            .exclude('#commonly-reused-element-with-known-issue'));
    }
})

export default test;