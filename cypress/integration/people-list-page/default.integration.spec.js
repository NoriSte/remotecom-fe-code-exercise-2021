/// <reference types="cypress" />

const fixture = [
  {
    id: 1,
    name: 'Ann Henry',
    jobTitle: 'Product manager',
    country: 'Germany',
    salary: 120000,
    currency: 'EUR',
    employment: 'employee',
  },
  {
    id: 2,
    name: 'Vittoria Janson',
    jobTitle: 'Pianist',
    country: 'Italy',
    salary: 70000,
    currency: 'EUR',
    employment: 'contractor',
  },
  {
    id: 4,
    name: 'Annette Williamson',
    jobTitle: 'CEO',
    country: 'United States',
    salary: 200000,
    currency: 'USD',
    employment: 'employee',
  },
  {
    id: 6,
    name: 'Jane Doe',
    jobTitle: 'Product Designer',
    country: 'United Kingdom',
    salary: 80000,
    currency: 'GBP',
    employment: 'employee',
  },
]

describe('People List page: default behavior', () => {
  it('When loaded, should immediately fetch the people', () => {
    // Intercept every people-related AJAX request
    cy.intercept('**/people*', fixture).as('fetch-people')

    // Visit the page and wait for the first fetch
    cy.visit('/')
    cy.wait('@fetch-people')

    // The table should show the people data
    cy.get('[data-testid=people-list-row-1]').within(() => {
      cy.findByText('Ann Henry').should('be.visible')
      cy.findByText('Product manager').should('be.visible')
      // the employment type is capitalized through CSS
      cy.findByText(/Employee/i).should('be.visible')
      cy.findByText('Germany').should('be.visible')
      cy.findByText('€ EUR 120.000,00').should('be.visible')
    })

    cy.get('[data-testid=people-list-row-2]').within(() => {
      cy.findByText('Vittoria Janson').should('be.visible')
      cy.findByText('Pianist').should('be.visible')
      // the employment type is capitalized through CSS
      cy.findByText(/Contractor/i).should('be.visible')
      cy.findByText('Italy').should('be.visible')
      cy.findByText('€ EUR 70.000,00').should('be.visible')
    })

    cy.get('[data-testid=people-list-row-4]').within(() => {
      cy.findByText('Annette Williamson').should('be.visible')
      cy.findByText('CEO').should('be.visible')
      // the employment type is capitalized through CSS
      cy.findByText(/Employee/i).should('be.visible')
      cy.findByText('United States').should('be.visible')
      cy.findByText('$ USD 200,000.00').should('be.visible')
    })

    cy.get('[data-testid=people-list-row-6]').within(() => {
      cy.findByText('Jane Doe').should('be.visible')
      cy.findByText('Product Designer').should('be.visible')
      // the employment type is capitalized through CSS
      cy.findByText(/Employee/i).should('be.visible')
      cy.findByText('United Kingdom').should('be.visible')
      cy.findByText('£ GBP 80,000.00').should('be.visible')
    })
  })

  it('When there are no people, should show a "empty result" text', () => {
    // Intercept every people-related AJAX request
    cy.intercept('**/people*', []).as('fetch-people')

    // Visit the page and wait for the first fetch
    cy.visit('/')
    cy.wait('@fetch-people')

    // Check the result shown by the people list
    cy.findByText('No people.')
  })

  it('When other people are fetched, should render only the latest people', () => {
    const firstFetch = [
      {
        id: 1,
        name: 'Ann Henry',
        jobTitle: 'Product manager',
        country: 'Germany',
        salary: 120000,
        currency: 'EUR',
        employment: 'employee',
      },
    ]

    const secondFetch = [
      {
        id: 2,
        name: 'Vittoria Janson',
        jobTitle: 'Pianist',
        country: 'Italy',
        salary: 70000,
        currency: 'EUR',
        employment: 'contractor',
      },
    ]

    // Intercept every people-related AJAX request
    cy.intercept('**/people*', firstFetch).as('fetch-people')
    cy.intercept('**/people?employment=contractor', secondFetch).as('fetch-contractors-only')

    // Visit the page
    cy.visit('/')

    // Start a new fetch by filtering out the Employees
    cy.findByLabelText('Employee').click()
    cy.wait('@fetch-contractors-only')

    // Check that the visible people are the latest ones
    cy.findByText(firstFetch[0].name).should('not.exist')
    cy.findByText(secondFetch[0].name).should('be.visible')
  })

  it('When other people are fetched before the first fetch is complete, should consider only the latest fetch', () => {
    const staleFetchDelay = 500
    const staleFixture = [
      {
        id: 1,
        name: 'Ann Henry',
        jobTitle: 'Product manager',
        country: 'Germany',
        salary: 120000,
        currency: 'EUR',
        employment: 'employee',
      },
    ]
    const latestFixture = [
      {
        id: 2,
        name: 'Vittoria Janson',
        jobTitle: 'Pianist',
        country: 'Italy',
        salary: 70000,
        currency: 'EUR',
        employment: 'contractor',
      },
    ]

    // Delay the first fetch on purpose
    cy.intercept('**/people', { delay: staleFetchDelay, body: staleFixture }).as('fetch-people')
    cy.intercept('**/people?employment=contractor', latestFixture).as('fetch-contractors-only')

    // Visit the page
    cy.visit('/')
    // Start a new fetch by filtering out the Employees
    cy.findByLabelText('Employee').click()
    cy.wait('@fetch-contractors-only')

    // The content of the second fetch should be visible
    cy.findByText(latestFixture[0].name).should('be.visible')
    // The content of the first fetch should not become visible, even after waiting the programmatic
    // delay of the first fetch
    cy.wait(staleFetchDelay + 100)
    cy.get(staleFixture[0].name).should('not.exist')
  })
})
