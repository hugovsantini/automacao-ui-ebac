describe('Login', () => {
    
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

        cy.get('#username').type('hugosantini92@gmail.com')
        cy.get('#password').type('skateboard1')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content')
            .should('contain', 'Olá')
    })

    it('Deve exibir erro ao tentar logar com senha inválida', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('senhaErrada')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error')
            .should('contain', 'Erro')
    })

})
