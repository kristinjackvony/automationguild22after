describe('Add Contact', () => {

    const random = Math.floor(Math.random() * 1000)
    const firstName = 'Prunella' + random

    beforeEach(() => {
        cy.loginAPI()
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/contactList')
    })

    it('Adds a new contact', () => {
        cy.addContact(firstName)
        cy.contains(firstName + ' Prunewhip')
        cy.contains('1969-05-13')
        cy.contains('pprunewhip@fake.com')
        cy.contains('8008675309')
        cy.contains('123 Sesame St. Apt. A')
        cy.contains('New York NY')
        cy.contains('01234')
        cy.contains('USA')
    })

    afterEach(() => {
        cy.deleteContactAPI()
    })
    
})