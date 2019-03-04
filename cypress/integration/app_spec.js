describe("App", () => {
  it("renders all components", () => {
    cy.visit("localhost:3000");

    cy.get("#image1").should("be.visible");
  });
});
