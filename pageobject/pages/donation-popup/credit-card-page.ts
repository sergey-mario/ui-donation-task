import { Locator, Page } from '@playwright/test';
import { CreditCardFrame } from './credit-card-frame';

export class CreditCardPage extends CreditCardFrame {
    readonly page: Page;
    readonly cardNumberInput: Locator;
    readonly cardExpirationDateInput: Locator;
    readonly cardCvcInput: Locator;
    readonly continueButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.cardNumberInput = this.creditFrame.first().locator('input[name="cardnumber"]');
        this.cardExpirationDateInput = this.creditFrame.nth(1).locator('input[name="exp-date"]');
        this.cardCvcInput = this.creditFrame.nth(2).locator('input[name="cvc"]');
        this.continueButton = this.clickMeFrame.locator('[data-qa="card-continue"]');
        this.errorMessage = this.clickMeFrame.getByTestId('tooltip-desktop-error-alert');
    }

    async enterCreditCardData(cardNumber: string, expirationDate: string, cvc: string) {
        await this.cardNumberInput.fill(cardNumber);
        await this.cardExpirationDateInput.fill(expirationDate);
        await this.cardCvcInput.fill(cvc);
    }
}
