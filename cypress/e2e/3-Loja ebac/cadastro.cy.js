import { faker } from '@faker-js/faker';

describe('Cadastro', () => {
    
    it('Deve cadastrar um novo usuário', () => {
        cy.visit('minha-conta')

        const email = `usuario${Date.now()}@teste.com`

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('Senha@12345')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-content')
            .should('contain', 'Olá')
    })

    it('Deve completa o cadastro com sucesso', () => {
       cy.get('#reg_email').type(faker.internet.email())
       cy.get('#reg_password').type('Senha@12345')
       cy.get(':nth-child(4) > .button').click()
       cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('exist')
       cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
       cy.get('#account_first_name').type(faker.person.firstName())
       cy.get('#account_last_name').type(faker.person.lastName())
       cy.get('.woocommerce-Button').click()
       cy.get('.woocommerce-message').should('contain', 'Detalhes')
       
    })
    it.only('Deve completa o cadastro com sucesso usando comando customizado', () => {
       cy.preCadastro(faker.internet.email(), 'Senha@12345', faker.person.firstName(), faker.person.lastName() )
       
    })
});