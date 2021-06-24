describe('Home Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  });

  it('should render app correctly', () => {
    cy.get('h2').should('contain', 'EXPLORE O UNIVERSO');
  });
  
  it('should search for a character and found it', () => {
    const input = cy.get('input').click();

    input.click();
    input.type('Hulk (HAS){enter}');

    cy.get('span').should('contain', 'Encontrado 1 heróis');
  });

  it('should search for a character and get a empty list', () => {
    const input = cy.get('input').click();

    input.click();
    input.type('some character that not exists {enter}');

    cy.get('span').should('contain', 'Encontrado 0 heróis');
  });
});
