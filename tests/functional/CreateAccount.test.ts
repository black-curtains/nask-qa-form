import test from '@lib/BaseTest';
import {expect} from "@playwright/test";
import { UserData } from '../../models/UserData';

test(`Verify account creation form`, { tag: '@Smoke'}, async ({ createAccountPage, accountCreatedPage }) => {

    const userData = UserData.createDefault();

    await test.step(`Navigate to Create account form`, async () => {
            await createAccountPage.navigateToURL();
        });

        await test.step(`Fill name field with value: ${userData.name}`, async () => {
            await createAccountPage.fillName(userData.name);
        });

        await test.step(`Fill surname field with value: ${userData.surname}`, async () => {
            await createAccountPage.fillSurname(userData.surname);
        });

        await test.step(`Fill email field with value: ${userData.email}`, async () => {
            await createAccountPage.fillEmail(userData.email);
        });

        await test.step('Fill password fields', async () => {
            await test.step(`Fill password with value: ${userData.password}`, async () => {
                await createAccountPage.fillPassword(userData.password);
            });
            await test.step(`Repeat password with value: ${userData.password}`, async () => {
                await createAccountPage.fillRepeatPassword(userData.password);
            });

        await test.step(`Fill birth date: ${userData.birthDate}`, async () => {
            await createAccountPage.fillSpecificBirthDate(userData.birthDate);
        });

        await test.step(`Select language: ${userData.language}`, async () => {
            await createAccountPage.selectLanguageByValue(userData.language);
        });

        await test.step(`Enter phone number': ${userData.phoneNumber}`, async () => {
            await createAccountPage.enterPhoneNumber(userData.phoneNumber);
        });

        await test.step(`Mark privacy policy checkbox`, async () => {
            await createAccountPage.setPrivacyPolicy(true);
        });

        await test.step(`Mark consent checkbox`, async () => {
            await createAccountPage.setConsentToMessages(true);
        });

        await test.step(`Click register button`, async () => {
            await createAccountPage.clickOnRegisterButton();
        });

        await test.step(`Verify if the account has been created`, async () => {
            const thankYouText = await accountCreatedPage.getThankYouText();
            const activationLinkText = await accountCreatedPage.getActivationLinkText();

            expect.soft(thankYouText?.trim()).toContain(userData.name);
            expect.soft(activationLinkText?.trim()).toContain(userData.email);

        });

    });
});