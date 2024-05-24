const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    specPattern: "cypress/Invoice/testcasesscripts/*.js"
  }, 
	projectId: "kz3844",  
});
