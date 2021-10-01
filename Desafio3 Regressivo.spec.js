///<reference types="cypress" >/

describe('Desafio 3 QA', () => {

    it('Acessar o home da Store, Procurar produto, Escolher produto e Verificar no carrinho', () => {
        cy.viewport(1200,1080)

        cy.visit('https://totvs.store/')
        cy.get('#search').type('TOTVS Backoffice (linha RM) - Novidades da Release 12.1.28{enter}')
        cy.get('[href="https://totvs.store/br/produto/treinamento-totvs-backoffice-novidades-release.html"]').click()
        cy.get('#product-addtocart-button').click()
        
    })

})