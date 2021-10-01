///<reference types="cypress" />

describe('Desafio GitHub Plataforma My Store', () =>{

    it('Desafio QA Teste End to End - RWAN', () =>{

        cy.visit('http://automationpractice.com/index.php/')

        cy.get('.login').click()

        cy.get('#email_create').type('khadidja4652@uorak.com')
        cy.get('#SubmitCreate > span').click()

        cy.get(':nth-child(3) > .top').click(cy.get('#id_gender1'))
        cy.get('#customer_firstname').type('Rwan')
        cy.get('#customer_lastname').type('Muniz')
        cy.get('#passwd').type('rwan1234')
        cy.get('#days').select('4')
        cy.get('#months').select('April')
        cy.get('#years').select('1993')
        cy.get('#address1').type('Barao do Triunfo, 455')
        cy.get('#address2').type('Apto 103')
        cy.get('#city').type('Salvador')
        cy.get('#postcode').type('00000')
        cy.get('#id_country').select('United States')
        cy.get('#id_state').select('New York')
        cy.get('#phone_mobile').type('5573991163202')
        cy.get('#alias')

        cy.get('#submitAccount > span').click()


        cy.get('li > .btn > span').click()
        cy.get('#homefeatured > .last-mobile-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.button-medium > span').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('#cgv').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('.bankwire').click()
        cy.get('#cart_navigation > .button > span').click()
        cy.get('.account > span').click()
        cy.get(':nth-child(1) > .myaccount-link-list > :nth-child(1) > a > span').click()
        cy.get('.history_state').contains('On backorder')
    })

})