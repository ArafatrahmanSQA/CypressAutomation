const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    defaultCommandTimeout: 3000
    on('task', {downloadFile})

    },
  },
});
