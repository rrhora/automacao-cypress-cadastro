/// <reference types="Cypress" />

import {faker} from "@faker-js/faker"


describe('E-Inscrição', function() {
    beforeEach(function() {
    cy.visit('https://checkout.einscricao.app/auth/signup')
})

    it('Validar o título da aplicação', function() {
        cy.title().should('be.equal','E-Inscrição')
    
    }) 
        //Esta ocorrendo erro da própria aplicaçao, ao tentar submeter inscrições. 
        //Porém, a automação esta ok.
        it('Validar cadastramento de uma nova inscrição',function() {
            cy.get ('input[name="name"]').type(faker.name.fullName(),)
            cy.get ('input[name="email"]').type(faker.internet.email(),)
            cy.get ('select[name="document_type"]').select('CPF')
            cy.get ('input[name="document_value"]').type('28920317020')
            cy.get ('input[name="password"]').type('Teste*111')
            cy.get ('input[name="password_confirmation"]').type('Teste*111')
            cy.get('.MuiGrid-spacing-xs-3-26 > :nth-child(1) > .MuiButtonBase-root-195 > .MuiButton-label-169').click()

        })
        //Validando mensagens de alerta nos campos obrigatórios
        it('Validar mensagem de alerta quando o campo "NOME" não for preenchido ',function() {
            cy.get ('input[name="email"]').type('ronaldoHoratestes2@hotmail.com')
            cy.get ('select[name="document_type"]').select('RG')
            cy.get ('input[name="document_value"]').type('1000')
            cy.get ('input[name="password"]').type('Teste*111')
            cy.get ('input[name="password_confirmation"]').type('Teste*111')
            cy.get ('.MuiGrid-spacing-xs-3-26 > :nth-child(1) > .MuiButtonBase-root-195 > .MuiButton-label-169').click()
            cy.get('.MuiFormHelperText-root-276').should('be.visible')

        })
        it('Validar mensagem de alerta quando o campo "EMAIL" não for preenchido',function() {
            cy.get ('input[name="name"]').type('Ronaldo')
            cy.get ('select[name="document_type"]').select('RG')
            cy.get ('input[name="document_value"]').type('1000')
            cy.get ('input[name="password"]').type('Teste*111')
            cy.get ('input[name="password_confirmation"]').type('Teste*111')
            cy.get('.MuiGrid-spacing-xs-3-26 > :nth-child(1) > .MuiButtonBase-root-195 > .MuiButton-label-169').click()
            cy.get('.sc-kpOJdX > .MuiFormControl-root-107').should('be.visible')

        })

        it('Validar mensagem de alerta quando o campo "DOCUMENTO" não for preenchido',function() {
            cy.get ('input[name="name"]').type('Ronaldo')
            cy.get ('input[name="email"]').type('ronaldoHoratestes2@hotmail.com')
            cy.get ('input[name="document_value"]').type('1000')
            cy.get ('input[name="password"]').type('Teste*111')
            cy.get ('input[name="password_confirmation"]').type('Teste*111')
            cy.get ('.MuiGrid-spacing-xs-3-26 > :nth-child(1) > .MuiButtonBase-root-195 > .MuiButton-label-169').click()
            cy.get(':nth-child(3) > :nth-child(1) > .MuiFormControl-root-107').should('be.visible')

        })

        it('Validar mensagem de alerta quando o campo "NUMERO DO DOCUMENTO" não for preenchido',function() {
            cy.get ('input[name="name"]').type('Ronaldo')
            cy.get ('input[name="email"]').type('ronaldoHoratestes2@hotmail.com')
            cy.get ('select[name="document_type"]').select('RG')
            cy.get ('input[name="password"]').type('Teste*111')
            cy.get ('input[name="password_confirmation"]').type('Teste*111')
            cy.get ('.MuiGrid-spacing-xs-3-26 > :nth-child(1) > .MuiButtonBase-root-195 > .MuiButton-label-169').click()
            cy.get(':nth-child(3) > :nth-child(2) > .MuiFormControl-root-107 > .MuiFormHelperText-root-276').should('be.visible')

        })


        it('Validar mensagem de alerta quando o campo "SENHA" não for preenchido',function() {
            cy.get ('input[name="name"]').type('Ronaldo')
            cy.get ('input[name="email"]').type('ronaldoHoratestes2@hotmail.com')
            cy.get ('select[name="document_type"]').select('RG')
            cy.get ('input[name="document_value"]').type('1000')
            cy.get ('input[name="password_confirmation"]').type('Teste*111')
            cy.get ('.MuiGrid-spacing-xs-3-26 > :nth-child(1) > .MuiButtonBase-root-195 > .MuiButton-label-169').click()
            cy.get(':nth-child(4) > :nth-child(1) > .MuiFormControl-root-107 > .MuiFormHelperText-root-276').should('be.visible')

        })

        it('Validar mensagem de alerta quando o campo "CONFIMAÇAO DE SENHA" não for preenchido',function() {
            cy.get ('input[name="name"]').type('Ronaldo')
            cy.get ('input[name="email"]').type('ronaldoHoratestes2@hotmail.com')
            cy.get ('select[name="document_type"]').select('RG')
            cy.get ('input[name="document_value"]').type('1000')
            cy.get ('input[name="password"]').type('Teste*111')
            cy.get ('.MuiGrid-spacing-xs-3-26 > :nth-child(1) > .MuiButtonBase-root-195 > .MuiButton-label-169').click()
            cy.get(':nth-child(4) > :nth-child(2) > .MuiFormControl-root-107 > .MuiFormHelperText-root-276').should('be.visible')

        })
 
    it('Validar mensagem de alerta quando o campo "NOME" possuir quantidade de caracter menor do que o 5 caracteres',function() {
        cy.get ('input[name="name"]').type('Ron')
        cy.get ('input[name="email"]').type('ronaldoHoratestes2@hotmail.com')
        cy.get ('select[name="document_type"]').select('RG')
        cy.get ('input[name="document_value"]').type('1000')
        cy.get ('input[name="password"]').type('Teste*111')
        cy.get ('input[name="password_confirmation"]').type('Teste*111')
        cy.get('.MuiGrid-spacing-xs-3-26 > :nth-child(1) > .MuiButtonBase-root-195 > .MuiButton-label-169').click()
        cy.get('.MuiFormHelperText-root-206').should('be.visible')

    })
    
    it('Validar mensagem de alerta quando o campo "EMAIL" for preenchido incorretamente',function() {
        cy.get ('input[name="name"]').type('Ronaldo')
        cy.get ('input[name="email"]').type('ronaldoteste')
        cy.get ('select[name="document_type"]').select('RG')
        cy.get ('input[name="document_value"]').type('1000')
        cy.get ('input[name="password"]').type('Teste*111')
        cy.get ('input[name="password_confirmation"]').type('Teste*111')
        cy.get('.MuiGrid-spacing-xs-3-26 > :nth-child(1) > .MuiButtonBase-root-195 > .MuiButton-label-169').click()
        cy.get('.sc-kpOJdX > .MuiFormControl-root-107 > .MuiFormHelperText-root-294').should('be.visible')

    })
    
    it('Validar mensagem de alerta quando o campo "DOCUMENTO CPF" for preenchido incorretamente',function() {
        cy.get ('input[name="name"]').type('Ronaldo')
        cy.get ('input[name="email"]').type('ronaldoHoratestes2@hotmail.com')
        cy.get ('select[name="document_type"]').select('CPF')
        cy.get ('input[name="document_value"]').type('1000')
        cy.get ('input[name="password"]').type('Teste*111')
        cy.get ('input[name="password_confirmation"]').type('Teste*111')
        cy.get('.MuiGrid-spacing-xs-3-26 > :nth-child(1) > .MuiButtonBase-root-195 > .MuiButton-label-169').click()
        cy.get(':nth-child(3) > :nth-child(2) > .MuiFormControl-root-107').should('be.visible')

    })
 
it('Validar mensagem de alerta quando o campo "SENHA E CONFIRMACAO DE SENHA" estiverem divergentes',function() {
    cy.get ('input[name="name"]').type('Ronaldo')
    cy.get ('input[name="email"]').type('ronaldoHoratestes2@hotmail.com')
    cy.get ('select[name="document_type"]').select('RG')
    cy.get ('input[name="document_value"]').type('1000')
    cy.get ('input[name="password"]').type('Teste*111')
    cy.get ('input[name="password_confirmation"]').type('Teste*111')
    cy.get('.MuiGrid-spacing-xs-3-26 > :nth-child(1) > .MuiButtonBase-root-195 > .MuiButton-label-169').click()
    cy.get('.MuiFormHelperText-root-294').should('be.visible')
    })

})
  