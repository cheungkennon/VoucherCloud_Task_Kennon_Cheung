/// <reference types="cypress" />

describe('VoucherCodes restaurant search functionality', () => {
  beforeEach(() => {
    // Given the user has accessed the Vouchercodes restaurant page
    cy.visit('https://www.vouchercodes.co.uk/restaurant-vouchers.html')
    cy.get('#google-autocomplete').as('location')
    cy.contains('Find restaurants vouchers').as('search')
  })

  it('London Restaurant Search', () => {
    //Search for restaurant codes in London
    cy.get('@location').type('London', {delay: 150})
      .type('{downarrow}{enter}', {delay: 150})
    cy.get('@search').click()
    //assert Location on search and URL
    cy.get('@location').should('have.value','London, UK')
    cy.url().should('include','rl=London,%20UK')
  })

})
