import { Locator, Page } from '@playwright/test';

export class ClickMePage {
    readonly page: Page;
    readonly giveNowButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.giveNowButton = page.frameLocator('iframe[title="Donate Button"]')
            .locator('[data-qa="donate-button-label"]');
    }

    async goto() {
        await this.page.goto('https://data.fundraiseup.com/qa-test-7R58U3/');
    }
}
