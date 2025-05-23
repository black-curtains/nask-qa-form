import test from '@lib/BaseTest';
import {expect} from "@playwright/test";
import {UserData} from '../../models/UserData';

test(`Verify creation form error`, {tag: '@Smoke'}, async ({createAccountPage}) => {

    const userData = UserData.createDefault();

    await createAccountPage.navigateToURL();
    await createAccountPage.fillName(userData.name);
    await createAccountPage.fillSurname(userData.surname);
    await createAccountPage.fillEmail(userData.email);
    await createAccountPage.fillPassword(userData.password);
    await createAccountPage.fillRepeatPassword(userData.password);
    await createAccountPage.fillSpecificBirthDate(userData.birthDate);
    await createAccountPage.selectLanguageByValue(userData.language);
    await createAccountPage.enterPhoneNumber(userData.phoneNumber);

    await createAccountPage.setPrivacyPolicy(false);
    await createAccountPage.setConsentToMessages(true);

    await createAccountPage.clickOnRegisterButton();

    const errorMessage = await createAccountPage.getErrorMessage();

    expect.soft(errorMessage?.trim()).toEqual("To pole jest wymagane");

});