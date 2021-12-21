Cypress.Commands.add('loginAPI', () => {
        cy.request({
            method: 'POST',
            url: 'http://thinking-tester-contact-list.herokuapp.com/users/login',
            body: {
                'email': 'testguilduser@fake.com',
                'password': 'foobarfoo'
            }
        }).then((response) => {
            Cypress.env('token', response.body.token)
        })
})

Cypress.Commands.add('addContact', (firstName) => {
    cy.get('#add-contact').click()
    cy.get('#firstName').type(firstName)
    cy.get('#lastName').type('Prunewhip')
    cy.get('#birthdate').type('1969-05-13')
    cy.get('#email').type('pprunewhip@fake.com')
    cy.get('#phone').type('8008675309')
    cy.get('#street1').type('123 Sesame St.')
    cy.get('#street2').type('Apt. A')
    cy.get('#city').type('New York')
    cy.get('#stateProvince').type('NY')
    cy.get('#postalCode').type('01234')
    cy.get('#country').type('USA')
    cy.get('#submit').click()
    cy.contains('td',firstName).siblings().first().invoke('text').then(text => Cypress.env('id', text))
})

Cypress.Commands.add('addContactAPI', (firstName) => {
    cy.request({
        method: 'POST',
        url: 'http://thinking-tester-contact-list.herokuapp.com/contacts',
        headers: {'Authorization': `Bearer ${Cypress.env('token')}` },
        body: {
            'firstName': firstName,
            'lastName': 'Prunewhip',
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
    }).then((response) => {
        Cypress.env('id', response.body._id)
    })
})

Cypress.Commands.add('getContactDetails', (firstName) => {
    cy.contains(firstName + ' Prunewhip').click()
})

Cypress.Commands.add('deleteContact', () => {
    cy.get('#delete').click()
    cy.on('window:confirm', () => true)
})

Cypress.Commands.add('deleteContactAPI', () => {
    cy.request({
        method: 'DELETE',
        url: `http://thinking-tester-contact-list.herokuapp.com/contacts/${Cypress.env('id')}`,
        headers: {'Authorization': `Bearer ${Cypress.env('token')}` }
    })
})