import { FrameLocator, Page } from '@playwright/test';

export class ClickMeFrame {
    readonly page: Page;
    readonly clickMeFrame: FrameLocator;

    constructor(page: Page) {
        this.page = page;
        this.clickMeFrame = page.frameLocator('#__checkout2');
    }
}
