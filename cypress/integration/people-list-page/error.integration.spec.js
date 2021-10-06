/// <reference types="cypress" />

describe('People List page: error management', () => {
  it('When the fetch goes wrong, should allow the user to retry', () => {
    // Intercept and fails every people-related AJAX request
    cy.intercept('**/people*', { forceNetworkError: true }).as('fetch-people')

    // Visit the page and wait for the first fetch
    cy.visit('/')
    cy.wait('@fetch-people')

    // Should show the "An error occurred." message
    cy.findByText('An error occurred.').should('be.visible')

    // Intercept and succeeds every next people-related AJAX request
    cy.intercept('**/people', []).as('fetch-people')

    // Retry fetching
    cy.findByText('Retry').click()
    cy.wait('@fetch-people')

    // The showed results no more contain the error
    cy.findByText('No people.')
    cy.findByText('An error occurred.').should('not.exist')
  })

  it('When the user filter the people, should respect the filter when retrying', () => {
    // Intercept and fails every people-related AJAX request
    cy.intercept('**/people*', { forceNetworkError: true }).as('fetch-people')

    // Visit the page and wait for the first, filter-free, fetch
    cy.visit('/')
    cy.wait('@fetch-people').its('request.url').should('not.include', '?')

    // Filter out the Employees
    cy.findByLabelText('Employee').click()
    cy.wait('@fetch-people').its('request.url').should('not.include', '?employment=contractors')

    // Retry fetching
    cy.findByText('Retry').click()

    // Check that the retry respect the original filter
    cy.wait('@fetch-people').its('request.url').should('not.include', '?employment=contractors')
  })
})
