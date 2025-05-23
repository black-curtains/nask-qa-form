import { Page, BrowserContext, Locator, expect } from '@playwright/test';

export class AccountCreatedPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly THANK_YOU_TEXT: Locator;
    readonly ACTIVATION_LINK_TEXT: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.THANK_YOU_TEXT = page.locator('div.container').locator('h1');
        this.ACTIVATION_LINK_TEXT = page.locator('div.container').locator('p');
    }

    async getThankYouText(): Promise<string | null> {
        return await this.THANK_YOU_TEXT.innerText();
    }
    async getActivationLinkText(): Promise<string | null> {
        return await this.ACTIVATION_LINK_TEXT.textContent();
    }

}