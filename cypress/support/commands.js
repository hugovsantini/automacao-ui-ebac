// cypress/support/commands.js

Cypress.Commands.add('login', (usuario, senha) => {
  cy.visit('/minha-conta')
  cy.get('#username', { timeout: 10000 }).should('be.visible').type(usuario)
  cy.get('#password').should('be.visible').type(senha)
  cy.get('.woocommerce-form > .button').click()
})

Cypress.Commands.add('preCadastro', (email, senha, nome, sobrenome) => {
  cy.visit('/minha-conta')

  cy.get('#reg_email', { timeout: 10000 }).should('be.visible').type(email)
  cy.get('#reg_password').should('be.visible').type(senha)
  cy.get(':nth-child(4) > .button').click()

  cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a', { timeout: 10000 })
    .should('be.visible')
    .click()

  cy.get('#account_first_name').should('be.visible').type(nome)
  cy.get('#account_last_name').type(sobrenome)
  cy.get('.woocommerce-Button').click()
})

Cypress.Commands.add('detalhesConta', (nome, sobrenome, usuario) => {
  // ✅ garante que está na página correta
  cy.visit('/minha-conta/edit-account')

  cy.get('#account_first_name', { timeout: 10000 })
    .should('be.visible')
    .clear()
    .type(nome)

  cy.get('#account_last_name')
    .should('be.visible')
    .clear()
    .type(sobrenome)

  cy.get('#account_display_name')
    .should('be.visible')
    .clear()
    .type(usuario)

  cy.get('.woocommerce-Button').should('be.visible').click()
})
