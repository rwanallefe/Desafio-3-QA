describe('entrar no google e buscar a palavra', () => {
  
    
    it('entrar no google', () => {
      cy.visit('https://www.google.com.br/');
     
    });
    it('buscar por ambev tech', () => {
    cy.get('input[name="q"]').type('ambev tech{enter}');
    });
});