// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './Metodos_tela_de_cadastro'
import './Metodos_tela_de_login'

// Alternatively you can use CommonJS syntax:
// require('./commands')
//Cypress.once('uncaught:exception', (err, runnable) => {
  //  return false;
  //})


  cy.on('uncaught:exception', (err, runnable) => {
    expect(err.message).to.include('of undefined')
      done()
      return false
    });

