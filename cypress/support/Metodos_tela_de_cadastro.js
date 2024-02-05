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


