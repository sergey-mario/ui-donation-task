import { FrameLocator, Page } from '@playwright/test';
import { ClickMeFrame } from '../click-me-page/click-me-frame';

export class CreditCardFrame extends ClickMeFrame{
    readonly page: Page;
    readonly creditFrame: FrameLocator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.creditFrame = this.mainFrame.frameLocator('[name^="__privateStripeFrame"]');
    }
}
