import { Locator, Page } from '@playwright/test';
import { MainFrame } from './frames/mainFrame';

export class PaymentOptionPage extends MainFrame {
    readonly page: Page;
    readonly coverTransactionCostsCheckbox: Locator;
    readonly creditCardButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.coverTransactionCostsCheckbox = this.mainFrame.locator('[data-qa="cover-fee-checkbox"]');
        this.creditCardButton = this.mainFrame.locator('[data-qa="cc-button"]');
    }
}
