describe('Produtos - Loja EBAC', () => {

    it('Deve selecionar um produto, escolher opções e adicionar ao carrinho', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/')

        // Clica no primeiro produto da lista
        cy.get('.product-block').first().click()

        // Seleciona tamanho
        cy.get('.button-variable-item-M').click()

        // Seleciona cor existente no produto
        cy.get('.button-variable-item-White').click()

        // Adiciona ao carrinho
        cy.get('.single_add_to_cart_button').click()

        // Valida mensagem de sucesso
        cy.get('.woocommerce-message')
            .should('contain', 'foi adicionado no seu carrinho')

        // Abre o carrinho
        cy.visit('http://lojaebac.ebaconline.art.br/carrinho/')
    })

})
