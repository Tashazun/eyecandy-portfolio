describe("App", () => {
  beforeEach(() => {
    cy.vist("/");
  });

  it("renders all components", () => {
    cy.get("#image1").should("be.visible");
    cy.get("#image2").should("be.visible");
    cy.get("#image3").should("be.visible");
  });
});
