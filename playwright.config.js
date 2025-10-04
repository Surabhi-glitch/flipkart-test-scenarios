// playwright.config.js
module.exports = {
  testDir: 'tests',
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
  reporter: [
    ['list'],          // prints test results in terminal
    ['html', { outputFolder: 'playwright-report', open: 'never' }] // creates HTML report
  ],
    projects: [
      { name: 'chromium', use: { browserName: 'chromium' } },
      { name: 'firefox',  use: { browserName: 'firefox' } },
      { name: 'webkit',   use: { browserName: 'webkit' } },
    ],
  };
  