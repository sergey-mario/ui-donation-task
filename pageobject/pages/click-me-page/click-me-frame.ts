import { FrameLocator, Page } from '@playwright/test';

export class ClickMeFrame {
    readonly page: Page;
    readonly mainFrame: FrameLocator;

    constructor(page: Page) {
        this.page = page;
        this.mainFrame = page.frameLocator('#__checkout2');
    }
}
