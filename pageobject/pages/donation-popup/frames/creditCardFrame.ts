import { FrameLocator, Page } from '@playwright/test';
import { MainFrame } from './mainFrame';

export class CreditCardFrame extends MainFrame{
    readonly page: Page;
    readonly creditFrame: FrameLocator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.creditFrame = this.mainFrame.frameLocator('[name^="__privateStripeFrame"]');
    }
}
