describe("Testing our form inputs", function(){
    beforeEach(function(){
        cy.visit('http://localhost:3000/pizza')
    });
    //testing that you can add a name
    it("Test name input", function(){
        cy.get("[data-cy=name]").type("Testing Name Out")
    });
    //checking the checkboxes in toppings
    it("tests checkbox input", function(){
        cy.get("[data-cy=checkbox1]").check().should("be.checked")
    })
    it("tests checkbox input", function(){
        cy.get("[data-cy=checkbox3]").check().should("be.checked")
    })
    it("tests checkbox input", function(){
        cy.get("[data-cy=checkbox5]").check().should("be.checked")
    })
    it("tests checkbox input", function(){
        cy.get("[data-cy=checkbox1]").check().should("be.checked")
    })
    it("tests checkbox input", function(){
        cy.get("[data-cy=checkbox12]").check().should("be.checked")
    })
    //testing for submitting the form
    it("tests form submit", function(){
        cy.get("[data-cy=submit]").submit()
    })
});