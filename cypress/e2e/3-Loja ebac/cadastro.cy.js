describe('Cadastro', () => {
    
    it('Deve cadastrar um novo usuário', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

        const email = `usuario${Date.now()}@teste.com`

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('Senha@12345')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-content')
            .should('contain', 'Olá')
    })

})
