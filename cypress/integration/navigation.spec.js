/// <reference types="Cypress" />

describe('Navigation', () => {
  it('should visit a Hook examples page', () => {
    cy.visit('/')

    cy.contains('Hooks').click()

    cy.url().should('include', '/hook-examples')
  })
})
