const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
            return config;

    },
  },
});
