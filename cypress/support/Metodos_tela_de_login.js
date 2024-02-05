import {faker} from "@faker-js/faker"

Cypress.Commands.add('Validar_acesso_a_tela_principal_de_login', function() {
    cy.wait(1000)
    cy.get('.ml-auto > .btn-secondary').should('be.visible').click()     
 
})

Cypress.Commands.add('Validar_mensagem_ao_informar_email_invalido_na_tela_de_login', function() {
    cy.wait(1000)
    cy.get('.ml-auto > .btn-secondary').should('be.visible').click()
    cy.get('#username').type('email@invalidocom')
    cy.get('#password').type(123456)
    cy.get('.jade-button').click() 
 
})

Cypress.Commands.add('Validar_mensagem_ao_informar_email_nao_cadastrado_na_tela_de_login', function() {
    cy.wait(1000)
    cy.get('.ml-auto > .btn-secondary').should('be.visible').click()
    cy.get('#username').type(faker.internet.email(),)
    cy.get('#password').type(123456)
    cy.get('.jade-button').click()   
 
})

Cypress.Commands.add('Validar_acesso_a_tela_esqueci_minha_senha', function() {
    cy.wait(1000)
    cy.get('.ml-auto > .btn-secondary').should('be.visible').click()
    cy.get('.sc-cmaqmh > .sc-91b8f957-0 > .jade-link > .jade-text').click()
 
})

Cypress.Commands.add('Validar_mensagem_ao_clicar_em_Receber_email_sem_informar_um_email_no_Esqueci_ou_quero_trocar_de_senha', function() {
    cy.wait(1000)
    cy.get('.ml-auto > .btn-secondary').should('be.visible').click()
    cy.get('.sc-cmaqmh > .sc-91b8f957-0 > .jade-link > .jade-text').click()
    cy.get(':nth-child(2) > .jade-list-item-navigation__content > .jade-text').click()
    cy.get('.jade-button__label > .jade-text').click()
    cy.get('.jade-button').click()
 
})

Cypress.Commands.add('Validar_mensagem_de_retorno_ao_informar_um_email_valido_no_Esqueci_ou_quero_trocar_de_senha', function() {
    cy.wait(1000)
    cy.get('.ml-auto > .btn-secondary').should('be.visible').click()
    cy.get('.sc-cmaqmh > .sc-91b8f957-0 > .jade-link > .jade-text').click()
    cy.get(':nth-child(2) > .jade-list-item-navigation__content > .jade-text').click()
    cy.get('#username').type(faker.internet.email(),)
    cy.get('.jade-button').click()
 
})

Cypress.Commands.add('Validar_mensagem_de_retorno_ao_informar_um_email_em_formato_invalido_no_Esqueci_ou_quero_trocar_de_senha', function() {
    cy.wait(1000)
    cy.get('.ml-auto > .btn-secondary').should('be.visible').click()
    cy.get('.sc-cmaqmh > .sc-91b8f957-0 > .jade-link > .jade-text').click()
    cy.get(':nth-child(2) > .jade-list-item-navigation__content > .jade-text').click()
    cy.get('#username').type('emailinvalido.com')
    cy.get('.jade-button').click()
 
})

Cypress.Commands.add('Validar_acesso_ao_link_nao_tenho_acesso_ao_meu_email', function() {
    cy.wait(1000)
        cy.get('.ml-auto > .btn-secondary').should('be.visible').click()
        cy.get('.sc-cmaqmh > .sc-91b8f957-0 > .jade-link > .jade-text').click()
        cy.get(':nth-child(2) > .jade-list-item-navigation__content > .jade-text').click()
        cy.get('.jade-link > .jade-text').click()
 
})

Cypress.Commands.add('Validar_acesso_ao_link_Esqueci_ou_perdi_acesso_ao_meu_email_cadastrado_na_Stone_do_Esqueci_minha_senha', function() {
    cy.wait(1000)
    cy.get('.ml-auto > .btn-secondary').should('be.visible').click()
    cy.get('.sc-cmaqmh > .sc-91b8f957-0 > .jade-link > .jade-text').click()
    cy.get(':nth-child(3) > .jade-list-item-navigation__content > .jade-text').click()
 
})