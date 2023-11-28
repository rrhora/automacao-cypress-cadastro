//<reference types="Cypress" />
 import{faker} from '@faker-js/faker'

describe('E-Inscrição', function() {
    beforeEach(function() {
    cy.visit('https://sampleapp.tricentis.com/101/app.php')
})

    it('Validar o título da aplicação', function() {
        cy.title().should('be.equal','sampleapp.dd.com/101/app.php')
    })

        it('Cadastro da inscrição',function() {
            //Preenchendo dados do veículo
            cy.get('#make').select('Nissan')
            cy.get('#model').select('Scooter')
            cy.get('#cylindercapacity').type('400')
            cy.get('#engineperformance').type('50')
            cy.get('#opendateofmanufacturecalender > .fa').click()
            cy.get('#dateofmanufacture').type('01/01/2023')
            cy.get('#dateofmanufacture')
            cy.get('#numberofseats').select('3')
            cy.get(':nth-child(7) > .group > :nth-child(1)').click()
            cy.get(':nth-child(7) > .group')
            cy.get('#numberofseatsmotorcycle').select('2')
            cy.get('#fuel').select('Petrol')
            cy.get('#payload').type('160')
            cy.get('#totalweight').type('300')
            cy.get('#listprice').type('25000')
            cy.get('#licenseplatenumber').type('17456542')
            cy.get('#annualmileage').type(4000)
            cy.wait(2000)
            cy.get('#nextenterinsurantdata').click()

            //Preenchendo dados do seguro
            cy.get('#firstname').type('Ronaldo')
            cy.get('#lastname').type('Reis')
            cy.get('#birthdate').type('01/01/1990')
            cy.get('#opendateofbirthcalender').click
            cy.get(':nth-child(4) > .group > :nth-child(1) > .ideal-radio').click()
            cy.get('#streetaddress').type('Avenida Paulista - 1000 3º Andar Sala 5')
            cy.get('#country').select('Brazil')
            cy.get('#zipcode').type('09111760')
            cy.get('#city').type('São Paulo')
            cy.get('#occupation').select('Selfemployed')
            cy.get('section[style="display: block;"] > .idealforms-field-checkbox > .group > :nth-child(2) > .ideal-check').click()
            cy.get('#website').type('www.automacaoronaldoreisdahora.com.br')
            cy.get('#nextenterproductdata').click()

            //Preenchendo dados do produto
            cy.get('#startdate').type('02/05/2024')
            cy.get('#insurancesum').select('3000000')
            cy.get('#meritrating').select('Bonus 6')
            cy.get('#damageinsurance').select('Partial Coverage')
            cy.get('section[style="display: block;"] > .idealforms-field-checkbox > .group > :nth-child(1)').click()
            cy.get('#courtesycar').select('No')
            cy.get('#nextselectpriceoption').click()
            cy.get('tr > .group > :nth-child(2) > .ideal-radio').click()
            cy.wait(2000)
            cy.get('#nextsendquote').click()

            //Preenchendo cotacao de preço
            cy.get('#email').type('ronaldo@teste.com')
            cy.get('#phone').type('1199999999')
            cy.get('#username').type('Ronaldo')
            cy.get('#password').type('Teste*111')
            cy.get('#confirmpassword').type('Teste*111')
            cy.get('#Comments').type('Teste comentários')
            // Em alguns momentos, inseri um wait(6000), pois a automação esta preenchendo 
            //os campos rápido demais, antes mesmo do html carregar totalmente os elementos.
            cy.wait(2000)
            cy.get('#sendemail').click({force: true})
            //Na ultima etapa, ao clicar em "Send", a automaçao efetua o cadastramento com sucesso.
            //Porem, apresenta um erro no codigo que nao tive mais tempo de corrigir, mas se tratas de algo bastante simples 
            //que provavemente atualizando a cersao do cypress ja se resolve.
            cy.wait(2000)
            cy.get('h2').should('be.visible')
            cy.wait(6000)
         
        })
    })
  