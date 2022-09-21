const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rnpgmt',
  video: false,
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
