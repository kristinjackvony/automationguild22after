describe('Edit Contact', () => {

    const random = Math.floor(Math.random() * 1000)
    const firstName = 'Prunella' + random
    const newFirstName = 'Joe' + random

    beforeEach(() => {
        cy.loginAPI()
        cy.addContactAPI(firstName)
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/contactList')
    })

    it('Edits a contact', () => {
        cy.getContactDetails(firstName)
        cy.get('#edit-contact').click()
        cy.get('#firstName').clear().type(newFirstName)
        cy.get('#lastName').clear().type('Schmoe')
        cy.get('#birthdate').clear().type('1977-07-07')
        cy.get('#email').clear().type('jschmoe@fake.com')
        cy.get('#phone').clear().type('8005551000')
        cy.get('#street1').clear().type('1313 Mockingbird Lane')
        cy.get('#street2').clear().type('Unit 2')
        cy.get('#city').clear().type('Toronto')
        cy.get('#stateProvince').clear().type('ON')
        cy.get('#postalCode').clear().type('A1B2C3')
        cy.get('#country').clear().type('Canada')
        cy.get('#submit').click()
        cy.get('#return').click()
        cy.contains(newFirstName + ' Schmoe')
        cy.contains('1977-07-07')
        cy.contains('jschmoe@fake.com')
        cy.contains('8005551000')
        cy.contains('1313 Mockingbird Lane Unit 2')
        cy.contains('Toronto ON A1B2C3')
        cy.contains('Canada')
    })

    afterEach(() => {
        cy.deleteContactAPI()
    })
})