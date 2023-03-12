describe('template spec', () => {
  it('should visit the url perfectly', () => {
    cy.visit('http://localhost:3000/')
  })

  it('should have the login button', () => {
    cy.visit('http://localhost:3000/');
    cy.get(".login_button").should("exist")
    cy.get(".login_button").should("exist");
   
cy.get('.login_button').nextAll()
  })
  it('should have following text', () => {
    cy.visit('http://localhost:3000/');
   cy.get("p").should("have.text","Home").click()
    
  })
})