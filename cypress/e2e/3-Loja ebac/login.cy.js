/// <reference types="cypress"/>

describe ('Funcionalidade: Login',() => {

    it ('Deve fazer login com sucesso', () =>{
        cy.visit( 'http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type ('hugosantini92@gmail.com')
        cy.get('#password').type ('skateboard1')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, hugo santini (não é hugo santini? Sair)')

    })
})