// cypress/e2e/produtos.cy.js
describe('Produtos - lojaebac', () => {
  const baseUrl = 'http://lojaebac.ebaconline.art.br';

  it('buscar produto e adicionar ao carrinho', () => {
    cy.visit(baseUrl);
    // Exemplo: abrir página de um produto direto (ajuste o slug)
    cy.visit(baseUrl + '/product/eos-v-neck-hoodie/'); // ajuste conforme slug do produto

    // Seletores para adicionar ao carrinho (ajuste conforme o botão)
    cy.get('button.single_add_to_cart_button, button.add_to_cart, form.cart button[type="submit"]').click();

    // Verificar mensagem de adicionado
    cy.contains(/adicionado|adicionado ao seu carrinho|added to your cart/i, { timeout: 10000 }).should('exist');

    // Ir para o carrinho
    cy.visit(baseUrl + '/cart/');
    // Verificar se produto está no carrinho
    cy.get('.cart_table, table.shop_table').should('exist');
    cy.contains('Eos V-Neck Hoodie', { timeout: 5000 }).should('exist'); // ajuste título do produto conforme o site
  });

  it('fluxo rápido de checkout exige login/dados', () => {
    cy.visit(baseUrl + '/cart/');
    cy.get('a.checkout-button, .checkout-button, a[href*="/checkout"]').click();
    // Deve exigir dados de pagamento ou login - verificar mensagem/URL
    cy.url().should('include', '/checkout');
    cy.contains(/payment|pagamento|endereço|checar/i).should('exist');
  });
});
