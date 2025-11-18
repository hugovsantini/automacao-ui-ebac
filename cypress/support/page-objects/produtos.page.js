class ProdutosPage {
    visitarUrl() {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/');
    }

    // --- SELETORES ---
    get listaProdutos() { return '.product-block'; }
    get iconeBusca() { return '.search-icon-toggle'; } 
    get campoBusca() { return '.search-input, [name="s"]'; }
    get tituloProduto() { return '.product_title'; }
    get botaoComprar() { return '.single_add_to_cart_button'; }
    get campoQuantidade() { return '.qty'; }
    get mensagemSucessoCarrinho() { return '.woocommerce-message'; } 

    // --- MÉTODOS ---

    selecionarProdutoNaLista(nomeProduto) {
        const regexNomeProduto = new RegExp(nomeProduto, 'i');
        cy.get(this.listaProdutos)
          .contains(regexNomeProduto)
          .click();
    }

    buscarProduto(termoBusca) {
        cy.get('body').then(($body) => {
            if ($body.find(this.iconeBusca).length > 0) {
                cy.get(this.iconeBusca).click();
            }
        });
        cy.get(this.campoBusca).first().type(termoBusca + '{enter}', { force: true });
    }

    adicionarProdutoAoCarrinho(quantidade, tamanho, cor) {
        // Seleciona tamanho e cor
        cy.get('.button-variable-item-' + tamanho).click({ force: true });
        cy.get('.button-variable-item-' + cor).click({ force: true });

        if (quantidade) {
            cy.get(this.campoQuantidade).clear().type(quantidade);
        }

        cy.get(this.botaoComprar).click();
    }
}

export default new ProdutosPage();