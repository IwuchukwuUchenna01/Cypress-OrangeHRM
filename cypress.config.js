const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1ui485',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.pageLoadTimeout = 10000;
      retries: 1;
    },
    video: true,
    trashAssetsBeforeRuns: false
  },
});