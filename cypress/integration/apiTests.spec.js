describe('API Tests', () => {

    const random = Math.floor(Math.random() * 1000)
    const firstName = 'Prunella' + random

    beforeEach(() => {
        cy.loginAPI()
    })

    it('Returns an error when the last name is missing', () => {
        cy.request({
            method: 'POST',
            url: 'http://thinking-tester-contact-list.herokuapp.com/contacts',
            failOnStatusCode: false,
            headers: {'Authorization': `Bearer ${Cypress.env('token')}` },
            body: {
                'firstName': firstName,
                'birthdate': '1969-05-13',
                'email': 'pprunewhip@fake.com',
                'phone': '8008675309',
                'street1': '123 Sesame St.',
                'street2': 'Apt. A',
                'city': 'New York',
                'stateProvince': 'NY',
                'postalCode': '01234',
                'country': 'USA'
                }
        }).should((response) => {
            expect(response.status).to.eq(400)
        })
    })
    
})