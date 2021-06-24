describe('Character Details Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/hero/1009351'); 
  });

  it('should render description page correctly', () => {
    cy.get('h1').should('contain', 'Hulk');
    cy.get('p').should(
      'contain',
      'Caught in a gamma bomb explosion while trying to save the life '
    );
    cy.get('h2').should('contain', 'Últimos lançamentos');
  });
});
