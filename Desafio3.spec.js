///<reference types="cypress" >/

describe('Desafio 3 QA', () => {

    it('Acessar o home da Store', () => {
        cy.viewport(1200,1080)

        cy.visit('https://totvs.store/')

    })

    it('Realizar pesquisa de um produto qualquer', () => {
        cy.viewport(1200,1080)

        cy.visit('https://totvs.store/')
        cy.get('#search').type('backoffice{enter}')
    })

    beforeEach(() => {
        cy.viewport(1200,1080)

        cy.visit('https://totvs.store/')
        cy.get('#search').type('TOTVS Backoffice (linha RM) - Novidades da Release 12.1.28{enter}')
        cy.get('[href="https://totvs.store/br/produto/treinamento-totvs-backoffice-novidades-release.html"] > .product-card-title').invoke('text').as('ProdutoEscolhido')
        cy.get('[href="https://totvs.store/br/produto/treinamento-totvs-backoffice-novidades-release.html"] > .product-card-footer > .price-box > .price-show-more > span').click()
        cy.get('.price').invoke('text').as('valorProduto')

    })

    it('Acessar o produto e validar seu nome', function () {

        cy.get('.base').should('contain', this.ProdutoEscolhido)
        
    })

    it('Adicionar o produto ao carrinho e validar com nome e valor', function () {

        cy.get('#product-addtocart-button').click()
        cy.get('.option-value > :nth-child(2)').invoke('text').should('contain', this.valorProduto)
        cy.get('.product-item-name > a').should('contain', this.ProdutoEscolhido)

    })

})