const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  numTestsKeptInMemory: 0,
  prodUrl: 'https://speechpundit.com',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/report',
    charts: true,
    reportPageTitle: 'speechpundit Test-cases -Report',
    embeddedScreenshots: true,
    html: true,
    json: false,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://dev02.speechpundit.com',
  },
})
