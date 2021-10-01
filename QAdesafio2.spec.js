///<reference types="cypress" >/

describe('Desafio 2 QA', () =>{

    it.skip('Fazer Login com dados errados', () => {

        cy.viewport(1200,1080)
        
        cy.visit('https://www.epocacosmeticos.com.br/')
        cy.get('.menu__header--login').click()
        cy.visit('https://www.epocacosmeticos.com.br/account')
        cy.get('[data-i18n="vtexid.forgotPswdHelper"]').click()
        cy.get('#appendedInputButton').type('rwan_muniz@hotmail.com')
        cy.get('form.ng-dirty > .modal-footer > #sendAccessKeyBtn').click()
        cy.get('#inputNewPassword').type('Rw1234an')
        cy.get('#inputConfirmNewPassword').type('Rw1234an')
        cy.get('#tryChangePswdBtn').click()
        cy.get('#vtexIdUI-confirm-access-code > form.ng-pristine > .modal-footer > .vtexIdUI-back-link > span').click()

        cy.get('#inputPassword').type('Rwan1234')
        cy.get('#classicLoginBtn').click()

    })

    it.skip('Fazer Login com dados corretos', () => {

        cy.viewport(1200,1080)

        cy.visit('https://www.epocacosmeticos.com.br/')
        cy.get('.menu__header--login').click()
        cy.visit('https://www.epocacosmeticos.com.br/login')
        cy.get('#inputEmail').type('rwan.muniz@gmail.com')
        cy.get('#inputPassword').type('Rwan1234')
        cy.get('#classicLoginBtn').click()

    })

    it('Fazer compra', () => {

        cy.viewport(1200,1080)

        cy.visit('https://www.epocacosmeticos.com.br/')
        cy.get('.header__search--field').type('vichy')
        cy.get('.header__search--btn').click()
        cy.get(':nth-child(1) > :nth-child(1) > .shelf-default__item > .shelf-default__image > .shelf-default__image--caption > .shelf-default__buy-button').click()    
        cy.get('.buy-button',{delete:10000}).click()
        cy.get('.epc-shopping-cart__footer > .button').click()
        
        cy.get('#cart-choose-more-products').click()
        cy.get('.header__search--field').type('skinceuticals')
        cy.get('.header__search--btn').click()
        cy.get(':nth-child(1) > :nth-child(1) > .shelf-default__item > .shelf-default__image > .shelf-default__image--caption > .shelf-default__buy-button').click()
        cy.get('.buy-button',{delete:10000}).click()

        cy.get('.epc-shopping-cart__footer > .button',{delete:10000}).click()
        cy.get('#cart-to-orderform').click()

        cy.get('#client-pre-email').type('rwan.muniz@gmail.com')
        cy.get('#btn-client-pre-email').click()

    })

    it('Limpar carrinho', () => {

        cy.viewport(1200,1080)

        cy.visit('https://www.epocacosmeticos.com.br/')
        cy.get('.header__search--field').type('la roche-posay')
        cy.get('.header__search--btn').click()
        cy.get(':nth-child(1) > :nth-child(1) > .shelf-default__item > .shelf-default__image > .shelf-default__image--caption > .shelf-default__buy-button').click()
        cy.get('.buy-button',{delete:11000}).click()
        cy.get('[data-product-index="0"] > .products-list__item-wrap > .product-info > .button',{delete:11000}).click()
        cy.get('.btn-comprar-mais').click()

        cy.get('.header__search--field').type('protetor solar')
        cy.get('.header__search--btn').click()
        cy.get(':nth-child(1) > .shelf-default__item > .shelf-default__image > .shelf-default__image--caption > .shelf-default__buy-button').click()
        cy.get('.header__logo--link').click()

    })
})