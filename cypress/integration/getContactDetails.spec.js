describe('Contact Details', () => {

    const random = Math.floor(Math.random() * 1000)
    const firstName = 'Prunella' + random

    beforeEach(() => {
        cy.loginAPI()
        cy.addContactAPI(firstName)
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/contactList')
    })

    it('Gets the contact details', () => {
        cy.getContactDetails(firstName)
        cy.contains(firstName)
        cy.contains('Prunewhip')
        cy.contains('1969-05-13')
        cy.contains('pprunewhip@fake.com')
        cy.contains('8008675309')
        cy.contains('123 Sesame St.')
        cy.contains('Apt. A')
        cy.contains('New York')
        cy.contains('NY')
        cy.contains('01234')
        cy.contains('USA')
    })

    afterEach(() => {
        cy.deleteContactAPI()
    })

})