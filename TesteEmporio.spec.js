/// <reference types="cypress" />

describe('Teste Site Emporio da Cerveja', () =>{

    it('Acessar site da emporio e fazer login', () =>{

        cy.viewport(1200,1080)
        cy.visit('https://www.emporiodacerveja.com.br/')
        cy.get('.emporiodacerveja-emporio-theme-2-x-ageGateButton').click()
        cy.get('div.relative > .vtex-button > .vtex-button__label').click()
        cy.get('.vtex-login-2-x-label').click()
        cy.get('.vtex-login-2-x-button > .vtex-button > .vtex-button__label').click()
        cy.get('.vtex-login-2-x-inputContainerEmail > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input').type('rwan.muniz@ambevtech.com.br')
        cy.get('.relative > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input').type('XoXoGB#93')
        cy.get('.vtex-login-2-x-sendButton > .vtex-button > .vtex-button__label').click()

    })

    it('Fazer compras no site', () =>{

        cy.get('[aria-label="2 of 18"] > .vtex-store-image-0-x-slideChildrenContainer > .vtex-store-image-0-x-imageElementLink > .vtex-store-image-0-x-imageElement').click()
        cy.get(':nth-child(9) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .emporiodacerveja-emporio-theme-2-x-buyButtonContainer > .emporiodacerveja-emporio-theme-2-x-buyButton > .vtex-button').click()
        cy.get(':nth-child(9) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .emporiodacerveja-emporio-theme-2-x-buyButtonContainer > .emporiodacerveja-emporio-theme-2-x-buyButton > .emporiodacerveja-emporio-theme-2-x-stepperContainer > .vtex-numeric-stepper-wrapper > .vtex-numeric-stepper-container > .vtex-numeric-stepper__plus-button-container > .vtex-numeric-stepper__plus-button').click()
        cy.get(':nth-child(8) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .emporiodacerveja-emporio-theme-2-x-buyButtonContainer > .emporiodacerveja-emporio-theme-2-x-buyButton > .vtex-button').click()
        cy.get(':nth-child(7) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .emporiodacerveja-emporio-theme-2-x-buyButtonContainer > .emporiodacerveja-emporio-theme-2-x-buyButton > .vtex-button').click()
        cy.get(':nth-child(7) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .emporiodacerveja-emporio-theme-2-x-buyButtonContainer > .emporiodacerveja-emporio-theme-2-x-buyButton > .emporiodacerveja-emporio-theme-2-x-stepperContainer > .vtex-numeric-stepper-wrapper > .vtex-numeric-stepper-container > .vtex-numeric-stepper__plus-button-container > .vtex-numeric-stepper__plus-button').click()
        cy.get('.emporiodacerveja-emporio-theme-2-x-cartButtonContainer > .vtex-button > .vtex-button__label').click()
        cy.get('.copy-coupon > .forms > .coupon > .coupon-form > .coupon-fieldset > div > .coupon-fields > [data-bind="visible: !isCouponTyped()"] > #cart-coupon').type('NEXT20')
        cy.get('.copy-coupon > .forms > .coupon > .coupon-form > .coupon-fieldset > div > .coupon-fields > [data-bind="visible: !isCouponTyped()"] > #cart-coupon-add').click()
        cy.get('#cart-to-orderform').click()
        cy.get('#payment-group-bankInvoicePaymentGroup > .payment-group-item-text').click()
        


    })

})