import { faker } from '@faker-js/faker';
import { expect, test } from '../fixture/app_fixture';

const moneyAmount: string = '1000';
const cardData = {
    cardNumber: '4242424242424242',
    expirationDate: '04/24',
    cvc: '000'
};
const email: string = 'maretskis@gmail.com';

test.describe('Donation', async () => {
    test('User can not donate if enter invalid card data', async ({
        clickMePage,
        secureDonationPage,
        paymentOptionPage,
        creditCardPage,
        personalInformationPage
    }) => {
        await clickMePage.goto();
        await clickMePage.giveNowButton.click();

        await secureDonationPage.chooseDonationType('Monthly');
        await secureDonationPage.currencySelector.selectOption('USD');
        await secureDonationPage.enterPrice(moneyAmount);
        await secureDonationPage.donateButton.click();

        await paymentOptionPage.coverTransactionCostsCheckbox.uncheck();
        expect.soft(await paymentOptionPage.coverTransactionCostsCheckbox.isChecked()).toBeFalsy();
        await paymentOptionPage.creditCardButton.click();

        const { cardNumber, expirationDate, cvc } = cardData;
        await creditCardPage.enterCreditCardData(cardNumber, expirationDate, cvc);
        await creditCardPage.continueButton.click();

        await personalInformationPage.enterPersonalData(faker.person.firstName(), faker.person.lastName(), email);
        await personalInformationPage.donateButton.click();

        expect(await creditCardPage.cardNumberInput).toBeVisible({ timeout: 3000 });
        expect(await creditCardPage.cardExpirationDateInput).toBeVisible({ timeout: 3000 });
        expect(await creditCardPage.cardCvcInput).toBeVisible({ timeout: 3000 });
        expect(await creditCardPage.errorMessage.textContent())
            .toContain('Your card was declined. Your request was in live mode, but used a known test card.');
    });
});






