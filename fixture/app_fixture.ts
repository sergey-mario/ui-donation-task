import { test as base } from '@playwright/test';
import { ClickMePage } from '../pageobject/click-me-page/click-me-page';
import { CreditCardPage } from '../pageobject/donation-popup/credit-card-page';
import { PaymentOptionPage } from '../pageobject/donation-popup/payment-option-page';
import { PersonalInformationPage } from '../pageobject/donation-popup/personal-information-page';
import { SecureDonationPage } from '../pageobject/donation-popup/secure-donation-page';

type Pages = {
    clickMePage: ClickMePage;
    creditCardPage: CreditCardPage;
    paymentOptionPage: PaymentOptionPage;
    personalInformationPage: PersonalInformationPage;
    secureDonationPage: SecureDonationPage;
};

export const test = base.extend<Pages>({
    clickMePage: async ({ page }, use) => {
        await use(new ClickMePage(page));
    },
    creditCardPage: async ({ page }, use) => {
        await use(new CreditCardPage(page));
    },
    paymentOptionPage: async ({ page }, use) => {
        await use(new PaymentOptionPage(page));
    },
    personalInformationPage: async ({ page }, use) => {
        await use(new PersonalInformationPage(page));
    },
    secureDonationPage: async ({ page }, use) => {
        await use(new SecureDonationPage(page));
    }
});

export { expect } from '@playwright/test';
