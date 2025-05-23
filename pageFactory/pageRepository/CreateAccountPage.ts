import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { WebActions } from "@lib/WebActions";

let webActions: WebActions;

export class CreateAccountPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly NAME_EDITBOX: Locator;
    readonly SURNAME_EDITBOX: Locator;
    readonly EMAIL_EDITBOX: Locator;
    readonly PASSWORD_EDITBOX: Locator;
    readonly REPEAT_PASSWORD_EDITBOX: Locator;
    readonly BIRTH_DATE_EDITBOX: Locator;
    readonly LANGUAGE_EDITBOX: Locator;
    readonly PHONE_NUMBER_EDITBOX: Locator;
    readonly REGISTER_BUTTON: Locator;
    readonly PRIVACY_POLICY_CHECKBOX: Locator;
    readonly CONSENT_TO_MESSAGES_CHECKBOX: Locator;
    readonly BOOKS_SEARCH_BOX: Locator;
    readonly ERROR_MESSAGE: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        webActions = new WebActions(this.page, this.context);
        this.NAME_EDITBOX = page.getByPlaceholder('Imię');
        this.SURNAME_EDITBOX = page.getByPlaceholder('Nazwisko');
        this.EMAIL_EDITBOX = page.getByPlaceholder('Twój adres e-mail');
        this.PASSWORD_EDITBOX = page.locator('input[type="password"]').nth(0);
        this.REPEAT_PASSWORD_EDITBOX = page.getByPlaceholder('Powtórz hasło');
        this.BIRTH_DATE_EDITBOX = page.getByPlaceholder('Data urodzenia');
        this.LANGUAGE_EDITBOX = page.locator('select.input.select');
        this.PHONE_NUMBER_EDITBOX = page.getByPlaceholder('Numer telefonu');
        this.REGISTER_BUTTON = page.getByRole('button', { name: 'Zarejestruj' });
        this.PRIVACY_POLICY_CHECKBOX = page.locator('div[class*=\'fake-input\']').nth(1);
        this.CONSENT_TO_MESSAGES_CHECKBOX = page.locator('div[class*=\'fake-input\']').nth(2);
        this.BOOKS_SEARCH_BOX = page.getByPlaceholder('Type to search');
        this.ERROR_MESSAGE = page.locator('.errors').nth(7);
    }

    async navigateToURL(): Promise<void> {
        await this.page.goto("/");
    }

    async fillName(name: string): Promise<void> {
        await this.NAME_EDITBOX.fill(name);
    }

    async fillSurname(surname: string): Promise<void> {
        await this.SURNAME_EDITBOX.fill(surname);
    }

    async fillEmail(email: string): Promise<void> {
        await this.EMAIL_EDITBOX.fill(email);
    }

    async fillPassword(password: string): Promise<void> {
        await this.PASSWORD_EDITBOX.fill(password);
    }

    async fillRepeatPassword(password: string): Promise<void> {
        await this.REPEAT_PASSWORD_EDITBOX.fill(password);
    }

    async enterPhoneNumber(phoneNumber: string): Promise<void> {
        await this.PHONE_NUMBER_EDITBOX.fill(phoneNumber);
    }

    async fillSpecificBirthDate(birthDate: string): Promise<void> {
            await this.BIRTH_DATE_EDITBOX.fill(birthDate);
    }

    async setPrivacyPolicy(accept: boolean): Promise<void> {
        const isChecked = await this.PRIVACY_POLICY_CHECKBOX.isChecked();
        if (isChecked !== accept) {
            await this.PRIVACY_POLICY_CHECKBOX.click();
        }
    }

    async setConsentToMessages(consent: boolean): Promise<void> {
        const isChecked = await this.CONSENT_TO_MESSAGES_CHECKBOX.isChecked();
        if (isChecked !== consent) {
            await this.CONSENT_TO_MESSAGES_CHECKBOX.click();
        }
    }

    async clickOnRegisterButton(): Promise<void> {
        await this.REGISTER_BUTTON.click();
    }

    async selectLanguageByValue(languageCode: string): Promise<void> {
        await this.LANGUAGE_EDITBOX.selectOption({ value: languageCode });
    }

    async getErrorMessage(): Promise<string | null> {
        await this.ERROR_MESSAGE.waitFor({ state: 'visible' });
        const text = await this.ERROR_MESSAGE.textContent();
        return text?.trim() || null;
    }

}