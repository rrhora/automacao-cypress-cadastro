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
        it('Validar o título da aplicação', function() {
        cy.title().should('be.equal','Stone: solução completa de vendas feita para o seu negócio') 
   }) 
        it('Validar cadastramento de uma nova inscrição',function() {
        cy.CadastroSejaStone()
                   
        })       

})
  