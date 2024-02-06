/// <reference types="Cypress" />

import {faker} from "@faker-js/faker"

describe('Login', function() {
    beforeEach(function() {
    
    cy.visit('https://www.stone.com.br')
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
})
        it('Validar acesso a tela principal de login', function() {
        cy.Validar_acesso_a_tela_principal_de_login()
        cy.get('[for="E-mail ou CPF"]').should('be.visible')

         }) 

   it('Validar mensagem ao informar email invalido na tela de login', function() {
    cy.Validar_mensagem_ao_informar_email_invalido_na_tela_de_login()
    cy.get('.jade-alert__content > .jade-text').should('be.visible')

   }) 

   it('Validar mensagem ao informar email não cadastrado na tela de login ', function() {
    cy.Validar_mensagem_ao_informar_email_nao_cadastrado_na_tela_de_login()
    cy.get('.jade-alert__content > .jade-text').should('be.visible')
   }) 

   it('Validar acesso a tela "esqueci minha senha" ', function() {
    cy.Validar_acesso_a_tela_esqueci_minha_senha()
    cy.get('.is-heading-medium').should('be.visible')
   
      }) 

    it('Validar mensagem ao clicar em "Receber email" sem informar um email no "Esqueci ou quero trocar de senha" ', function() {
    cy.Validar_mensagem_ao_clicar_em_Receber_email_sem_informar_um_email_no_Esqueci_ou_quero_trocar_de_senha() 
        cy.get('.jade-support-text > .jade-text').should('be.visible')
    })
    
    it('Validar mensagem de retorno ao informar um email válido no "Esqueci ou quero trocar de senha" ', function() {
    cy.Validar_mensagem_de_retorno_ao_informar_um_email_valido_no_Esqueci_ou_quero_trocar_de_senha()  
        cy.contains('p','Enviamos um e-mail pra você trocar a senha').should('be.visible')
      
    })

    it('Validar mensagem de retorno, ao informar um email em formato inválido no "Esqueci ou quero trocar de senha" ', function() {
    cy.Validar_mensagem_de_retorno_ao_informar_um_email_em_formato_invalido_no_Esqueci_ou_quero_trocar_de_senha()    
        cy.contains('.jade-support-text > .jade-text','Corrija o e-mail.').should('be.visible')
   
    })

    it('Validar acesso ao link "Não tenho acesso ao meu email" ', function() {
    cy.Validar_acesso_ao_link_nao_tenho_acesso_ao_meu_email()
    cy.get('header > .jade-text').should('be.visible')
    })

    it('Validar acesso ao link "Esqueci ou perdi acesso ao meu e-mail cadastrado na Stone" do Esqueci minha senha', function() {
    cy.Validar_acesso_ao_link_Esqueci_ou_perdi_acesso_ao_meu_email_cadastrado_na_Stone_do_Esqueci_minha_senha() 
        cy.get('header > .jade-text').should('be.visible') 
    })

})