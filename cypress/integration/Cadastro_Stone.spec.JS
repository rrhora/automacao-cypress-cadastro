/// <reference types="Cypress" />

import {faker} from "@faker-js/faker"

describe('Seja Stone', function() {
    beforeEach(function() {
    
    cy.visit('https://www.stone.com.br')
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
        })
        })
                       
       // Cenários de testes
        it('Validar o título da aplicação', function() {
        cy.title().should('be.equal','Stone: solução completa de vendas feita para o seu negócio') 
       
        }) 
        
        it('Validar cadastramento de uma nova inscrição',function() {
        cy.CadastroSejaStone()
                   
        })       

        it('Validar mensagem de alerta quando o campo "Nome completo" não for preenchido',function() {
        cy.Validar_mensagem_de_alerta_quando_o_campo_Nome_completo_nao_for_preenchido()
                     
        })       
  
        it('Validar mensagem de alerta quando o campo "Celular com DDD" não for preenchido',function() {
        cy.Validar_mensagem_de_alerta_quando_o_campo_Celular_com_DDD_nao_for_preenchido()
                     
        })       
  
        it('Validar mensagem de alerta quando o campo "Celular com DDD" estiver incompleto.',function() {
        cy.Validar_mensagem_de_alerta_quando_o_campo_Celular_com_DDD_estiver_incompleto()
                     
        })       
  
        it('Validar mensagem de alerta quando o campo "E-mail" estiver vazio.',function() {
        cy.Validar_mensagem_de_alerta_quando_o_campo_Email_estiver_vazio()
                     
        })       
  
        it('Validar mensagem de alerta quando o campo "E-mail" for inválido.',function() {
        cy.Validar_mensagem_de_alerta_quando_o_campo_Email_for_inválido()
                     
        })       
      

})
  