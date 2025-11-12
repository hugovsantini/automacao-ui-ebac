/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Login', () => {

    // 🔁 Executa antes de cada teste individual
    beforeEach(() => {
        cy.visit('minha-conta') // garante que todos os testes comecem na página de login
    })
})

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('hugosantini92@gmail.com')
        cy.get('#password').type('skateboard1')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content')
            .should('contain', 'Olá')
    });

    it('Deve exibir erro ao tentar logar com senha inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('senhaErrada')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error')
            .should('contain', 'Erro')
    });

    it('Deve fazer login com sucesso usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content')
            .should('contain', 'Olá')
    });

    it('Deve fazer login usando o fixture', () => {
        cy.fixture('perfil').then(dados => {  
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha)
            cy.get('.woocommerce-form > .button').click()

            cy.get('.woocommerce-MyAccount-content')
                .should('contain', 'Olá')
        });
    })
    it.only('Deve fazer login com sucesso usando comandos customizados', () => {
        cy.login('hugosantini92@gmail.com', 'skateboard1')
        cy.get('.woocommerce-MyAccount-content').should('contain', 'Olá')

    });