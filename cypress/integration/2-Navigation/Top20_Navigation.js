/// <reference types="cypress" />

describe('VoucherCodes Top20 Navigation', () => {
    beforeEach(() => {
      // Given the user has accessed the Vouchercodes homepage
      cy.visit('https://www.vouchercodes.co.uk/')
      cy.contains('Top 20').as('navigator')
    })
  
    it('Navigation from HomePage', () => {
      //navigate from homepage to top 20 page (will fail due invalid text assert (possibly caused bychange in text))
      cy.get('@navigator').click()
      cy.url().should('include','/featured-voucher-codes.html')
      cy.get('[data-qa="el:heading cat:Top 20 Voucher Codes"]').should('have.text', '\n   Top 20 Voucher Codes\n  ')
    })  
  })  