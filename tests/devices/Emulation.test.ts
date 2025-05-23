import test from '@lib/BaseTest';
import { UserData } from '../../models/UserData';

test(`Verify Elements Page.`, async ({ createAccountPage }) => {
    const userData = UserData.createDefault();

    await createAccountPage.navigateToURL();
    await createAccountPage.fillEmail(userData.email);
    await createAccountPage.setPrivacyPolicy(true)

});