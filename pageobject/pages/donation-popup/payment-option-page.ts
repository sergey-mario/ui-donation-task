import { Locator, Page } from '@playwright/test';
import { ClickMeFrame } from '../click-me-page/click-me-frame';

export class PaymentOptionPage extends ClickMeFrame {
    readonly page: Page;
    readonly coverTransactionCostsCheckbox: Locator;
    readonly creditCardButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.coverTransactionCostsCheckbox = this.clickMeFrame.locator('[data-qa="cover-fee-checkbox"]');
        this.creditCardButton = this.clickMeFrame.locator('[data-qa="cc-button"]');
    }
}
