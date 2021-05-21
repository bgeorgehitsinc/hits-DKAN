context('Administration pages', () => {
  let baseurl = Cypress.config().baseUrl;
  beforeEach(() => {
      cy.drupalLogin('testeditor', 'testeditor')
  })

  it('I should see a link for the dataset properties configuration', () => {
    cy.visit(baseurl + "/admin")
    cy.get('.toolbar-icon-system-admin-dkan').contains('DKAN').next('.toolbar-menu').then($el=>{
        cy.wrap($el).invoke('show')
        cy.wrap($el).contains('Dataset properties')
    })
    cy.visit(baseurl + "/admin/dkan/properties")
    cy.get('.fieldset-legend').should('have.text', 'List of dataset properties with referencing and API endpoint')
  })

  it('I should see a link for the SQL endpoint configuration', () => {
    cy.visit(baseurl + "/admin")
    cy.get('.toolbar-icon-system-admin-dkan').contains('DKAN').next('.toolbar-menu').then($el=>{
        cy.wrap($el).invoke('show')
        cy.wrap($el).contains('SQL endpoint')
    })
    cy.visit(baseurl + "/admin/dkan/sql_endpoint")
    cy.get('label').should('have.text', 'Rows limit')
  })
})
