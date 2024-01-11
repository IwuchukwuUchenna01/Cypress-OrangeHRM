const { defineConfig } = require("cypress");

module.exports = defineConfig({
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