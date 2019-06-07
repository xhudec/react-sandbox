/// <reference types="Cypress" />

describe('Home Page', () => {
  it('should contain page title and a welcome message', () => {
    cy.visit('')

    cy.contains('🏡Home')
    cy.contains('Hello folks! 👋')
    cy.contains('Welcome to my personal React Sandbox!')
  })
})
