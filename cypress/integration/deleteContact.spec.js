describe('Delete Contact', () => {

    const random = Math.floor(Math.random() * 1000)
    const firstName = 'Prunella' + random 

    beforeEach(() => {
        cy.loginAPI()
        cy.addContactAPI(firstName)
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/contactList')
    })

    it('Edits a new contact', () => {
        cy.contains(firstName).click()
        cy.deleteContact()
        cy.contains(firstName).should('not.exist')
    })
    
})