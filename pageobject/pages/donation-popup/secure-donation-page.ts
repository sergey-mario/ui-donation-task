import { Locator, Page } from '@playwright/test';
import { MainFrame } from './frames/mainFrame';

export class SecureDonationPage extends MainFrame {
    readonly page: Page;
    readonly donationTypeButton: string;
    readonly currencySelector: Locator;
    readonly priceInput: Locator;
    readonly donateButton: Locator;


    constructor(page: Page) {
        super(page);
        this.page = page;
        this.donationTypeButton = 'button.btn-tab';
        this.currencySelector = this.mainFrame.locator('[data-qa="currency-selector"]');
        this.priceInput = this.mainFrame.getByTestId('price-input');
        this.donateButton = this.mainFrame.locator('[data-qa="donate-button"]');
    }

    async chooseDonationType(type: 'Give once' | 'Monthly') {
        await this.mainFrame.locator(this.donationTypeButton, { hasText: type }).click();
    }

    async enterPrice(value: string) {
        await this.priceInput.clear();
        await this.priceInput.fill(value);
    }
}
