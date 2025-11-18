// cypress.config.js (ou cypress.json)

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Define a URL base para cy.visit('/')
    baseUrl: 'http://lojaebac.ebaconline.art.br', 
    
    // Configurações de onde os arquivos de teste estão
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', 
    
    setupNodeEvents(on, config) {
      // Implementar node event listeners aqui
    },
  },
});