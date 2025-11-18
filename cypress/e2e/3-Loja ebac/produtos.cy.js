import produtosPage from '../../../cypress/support/page-objects/produtos.page'

describe('Funcionalidades da Loja EBAC - Produtos', () => {

    beforeEach(() => {
        // Visita a página principal de produtos antes da maioria dos testes
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/'); 
    });

    // --- 1 - Deve selecionar um produto da lista (Abominable Hoodie) ---
    it('1 - Deve selecionar um produto da lista', () => {
        const nomeProduto = 'Abominable Hoodie';
        produtosPage.selecionarProdutoNaLista(nomeProduto);
        cy.get(produtosPage.tituloProduto).should('contain', nomeProduto);
    });

    // --- 2 - Deve buscar um produto com sucesso (Termo Genérico e Timeout) ---
    it('2 - Deve buscar um produto com sucesso', () => {
        const termoBusca = 'Shirt'; 
        produtosPage.buscarProduto(termoBusca)
        
        // Timeout de 20s para acomodar a lentidão do servidor
        cy.get(produtosPage.listaProdutos, { timeout: 20000 }).should('exist'); 
    });

    // --- 3 - Deve visitar a página do produto (Fluxo estável) ---
    it('3 - Deve visitar a página de um produto na lista principal', () => {
        cy.get(produtosPage.listaProdutos, { timeout: 10000 })
            .should('be.visible')
            .first()
            .click();
        
        cy.get(produtosPage.botaoComprar).should('be.visible');
    });

    // --- 4 - Deve adicionar ao carrinho ---
    it('4 - Deve adicionar ao carrinho', () => {
        const nomeProduto = 'Oslo Trek Hoodie';
        const quantidade = 1; 
        const tamanho = 'L'; 
        const cor = 'Brown'; 

        // Navegação direta para garantir que o produto seja acessado
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/oslo-trek-hoodie/');
        
        // ESPERA EXPLÍCITA: Permite que o JavaScript carregue as opções de variação
        cy.wait(2000); 

        // Executa a adição ao carrinho com a combinação correta
        produtosPage.adicionarProdutoAoCarrinho(quantidade, tamanho, cor);

        // Asserção final
        cy.get(produtosPage.mensagemSucessoCarrinho, { timeout: 15000 }) 
            .should('be.visible')
            .and('contain', 'adicionado no seu carrinho'); // Asserção ajustada para a frase exata
    });
});