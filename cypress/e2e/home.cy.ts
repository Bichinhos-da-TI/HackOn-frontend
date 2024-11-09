describe('Página Inicial', () => {
  it('deve carregar a página inicial com sucesso', () => {
    cy.visit('/');
    cy.contains('Bem-vindo ao Hack-On!');
  });
});
