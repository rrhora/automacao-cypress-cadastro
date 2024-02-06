import {faker} from "@faker-js/faker"

Cypress.Commands.add('CadastroSejaStone', function() {
    cy.get('.ml-auto > .btn-primary[aria-label="Seja Stone" ][href="/adquira/"] ').click()
    cy.wait(3000)
    cy.get(':nth-child(1) > .FormikTextField_inputContainer__qyW0y > .FormikTextField_label__R5lFL').type(faker.name.fullName(),)
    cy.get('#phone').type(faker.phone.number(),)
    cy.get('#email').type(faker.internet.email(),)
    cy.get('.react-select-form__value-container').type("Entre R$ 10.000 e R$ 15.000")
    cy.wait(2000)
    cy.get('#tpv-submit').click()
    cy.wait(4000)
    //Validando mensagem de sucesso de cadastramento
    cy.contains('.p-24 > .relative > .mt-16','Você receberá uma mensagem agora no seu WhatsApp!').should('be.visible')   

})


Cypress.Commands.add('Validar_mensagem_de_alerta_quando_o_campo_Nome_completo_nao_for_preenchido', function() {
    cy.get('.ml-auto > .btn-primary[aria-label="Seja Stone" ][href="/adquira/"] ').click()
    cy.wait(3000)
    cy.get(':nth-child(1) > .FormikTextField_inputContainer__qyW0y > .FormikTextField_label__R5lFL').click()
    cy.get('#phone').type(faker.phone.number(),)
    cy.get('#email').type(faker.internet.email(),)
    cy.wait(2000)
    //Validando mensagem de sucesso de cadastramento
    cy.contains('#name-error','Este campo é obrigatório!').should('be.visible')   

})

Cypress.Commands.add('Validar_mensagem_de_alerta_quando_o_campo_Celular_com_DDD_nao_for_preenchido', function() {
    cy.get('.ml-auto > .btn-primary[aria-label="Seja Stone" ][href="/adquira/"] ').click()
    cy.wait(3000)
    cy.get(':nth-child(1) > .FormikTextField_inputContainer__qyW0y > .FormikTextField_label__R5lFL').type(faker.name.fullName(),)
    cy.get('#phone').click()
    cy.get('#email').click()
    cy.wait(2000)
    //Validando mensagem de erro de cadastramento
    cy.contains('#phone-error','Este campo é obrigatório!').should('be.visible') 

})

Cypress.Commands.add('Validar_mensagem_de_alerta_quando_o_campo_Celular_com_DDD_estiver_incompleto', function() {
    cy.get('.ml-auto > .btn-primary[aria-label="Seja Stone" ][href="/adquira/"] ').click()
    cy.wait(3000)
    cy.get(':nth-child(1) > .FormikTextField_inputContainer__qyW0y > .FormikTextField_label__R5lFL').type(faker.name.fullName(),)
    cy.get('#phone').type('01195956')
    cy.wait(2000)
    cy.get('#email').click()
    cy.contains('#phone-error','É necessário um telefone válido!').should('be.visible')   

})

Cypress.Commands.add('Validar_mensagem_de_alerta_quando_o_campo_Email_estiver_vazio', function() {
    cy.get('.ml-auto > .btn-primary[aria-label="Seja Stone" ][href="/adquira/"] ').click()
    cy.wait(3000)
    cy.get(':nth-child(1) > .FormikTextField_inputContainer__qyW0y > .FormikTextField_label__R5lFL').type(faker.name.fullName(),)
    cy.get('#phone').type(faker.phone.number(),)
    cy.get('#email').click()
    cy.get('.react-select-form__value-container').type("Entre R$ 10.000 e R$ 15.000")
    cy.wait(2000)
    
    //Validando mensagem de sucesso de cadastramento
    cy.contains('#email-error','Este campo é obrigatório!').should('be.visible')   

})

Cypress.Commands.add('Validar_mensagem_de_alerta_quando_o_campo_Email_for_inválido', function() {
    cy.get('.ml-auto > .btn-primary[aria-label="Seja Stone" ][href="/adquira/"] ').click()
    cy.wait(3000)
    cy.get(':nth-child(1) > .FormikTextField_inputContainer__qyW0y > .FormikTextField_label__R5lFL').type(faker.name.fullName(),)
    cy.get('#phone').type(faker.phone.number(),)
    cy.get('#email').type('testesemail')
    cy.get('.react-select-form__value-container').type("Entre R$ 10.000 e R$ 15.000")
    cy.wait(2000)
  
    //Validando mensagem de sucesso de cadastramento
    cy.contains('#email-error','É necessário um e-mail válido!').should('be.visible')   

})
