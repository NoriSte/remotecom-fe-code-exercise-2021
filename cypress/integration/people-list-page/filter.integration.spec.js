/// <reference types="cypress" />

// Fixtures
const johnDoe = {
  id: 1,
  name: 'John Doe',
  jobTitle: 'Product manager',
  country: 'Germany',
  salary: 120000,
  currency: 'EUR',
  employment: 'employee',
}
const joeDoe = {
  id: 2,
  name: 'Joe Doe',
  jobTitle: 'Pianist',
  country: 'Italy',
  salary: 70000,
  currency: 'EUR',
  employment: 'employee',
}

const johnAndJoe = [johnDoe, joeDoe]
const joeOnly = [joeDoe]

describe('People List page: filters', () => {
  it('When the users filter the people, should respect the filter', () => {
    // Dynamically stub the response based on the user search, useful to test the free-text search
    cy.intercept('**/people*', (request) => {
      const searchingJoe = request.url.includes('name_like=Joe')

      request.reply(searchingJoe ? joeOnly : johnAndJoe)
    }).as('fetch-people')

    // Visit the page and wait for the first, filter-free, fetch
    cy.visit('/')
    cy.wait('@fetch-people').its('request.url').should('not.include', '?')

    // --------------------------------------------
    // EMPLOYEES/CONTRACTORS FILTER

    // Filter out the Employees and wait for the fetch
    cy.findByLabelText('Employee').click()
    cy.wait('@fetch-people').its('request.url').should('include', 'employment=contractor')

    // Filter out the Contractors too, no request is performed because the filter exclude every people
    cy.findByLabelText('Contractor').click()
    cy.findByText('No people.').should('be.visible')

    // Filter in the Employees
    cy.findByLabelText('Employee').click()
    cy.wait('@fetch-people').its('request.url').should('include', 'employment=employee')

    // Check that both John and Joe are visible
    cy.findByText(johnDoe.name).should('be.visible')
    cy.findByText(joeDoe.name).should('be.visible')

    // --------------------------------------------
    // FREE-TEXT SEARCH

    // Search for "Joe"
    // Please note: the fetch isn't debounced and every keystroke triggers a fetch
    cy.findByPlaceholderText('Search employees...').type('Joe', {
      // ATTENTION: the default delay is 10 ms but Cypress can't detect the three requests in a row
      // that start at every keystroke
      delay: 50,
    })

    // Fetch #1
    cy.wait('@fetch-people')
      .its('request.url')
      .should('include', 'name_like=J')
      .should('include', 'employment=employee')

    // Fetch #2
    cy.wait('@fetch-people')
      .its('request.url')
      .should('include', 'name_like=Jo')
      .should('include', 'employment=employee')

    // Fetch #3
    cy.wait('@fetch-people')
      .its('request.url')
      .should('include', 'name_like=Joe')
      .should('include', 'employment=employee')

    // Check that only Joe is visible
    cy.findByText(johnDoe.name).should('not.exist')
    cy.findByText(joeDoe.name).should('be.visible')
  })
})
