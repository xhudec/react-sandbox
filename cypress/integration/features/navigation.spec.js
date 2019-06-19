/// <reference types="Cypress" />

describe('Navigation', () => {
  describe('Logo', () => {
    it('should contain a React Sandbox logo', () => {
      cy.visit('')

      cy.contains('React Sandbox')
    })

    it('should redirect to home page when Logo is clicked', () => {
      cy.visit('/hook-examples')

      cy.contains('React Sandbox').click()

      cy.url().should('include', '/')
    })
  })

  describe('Navigation List', () => {
    it('should visit a Hook examples page', () => {
      cy.visit('')

      cy.contains('Hooks').click()

      cy.url().should('include', '/hook-examples')
    })

    it.skip('should visit a Suspense examples page', () => {
      cy.visit('')

      cy.contains('Suspense').click()

      cy.url().should('include', '/suspense-examples')
    })

    it.skip('should visit a Experimental page', () => {
      cy.visit('')

      cy.contains('Experimental').click()

      cy.url().should('include', '/experimental')
    })
  })
})
