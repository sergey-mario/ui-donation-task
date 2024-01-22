import { Locator, Page } from '@playwright/test';
import { ClickMeFrame } from '../click-me-page/click-me-frame';

export class PersonalInformationPage extends ClickMeFrame{
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly donateButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.firstNameInput = this.clickMeFrame.getByTestId('privacy-first-name-input');
        this.lastNameInput = this.clickMeFrame.getByTestId('privacy-last-name-input');
        this.emailInput = this.clickMeFrame.getByTestId('privacy-email-input');
        this.donateButton = this.clickMeFrame.getByTestId('pay-button');
    }

    async enterPersonalData(firstName: string, lastName: string, email: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
    }
}
