import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 3 : undefined,
    reporter: [
        ['list'],
        [
            'allure-playwright',
            {
                environmentInfo: {
                    NODE_VERSION: process.version,
                    OS: process.platform,
                    Environment: process.env.NODE_ENV,
                    Browser: 'chromium'
                }
            }
        ],
        ['html', { open: 'never' }]
    ],
    timeout: 30000,
    use: {
        trace: 'on-first-retry'
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }
        },
        {
            name: 'mobile',
            use: { ...devices['iPhone 14 Pro Max'] },
            dependencies: ['chromium']
        }
    ]
});
