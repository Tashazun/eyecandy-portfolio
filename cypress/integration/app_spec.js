describe("App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders landing page animations", () => {
    cy.get("#black").should("be.visible");
    cy.get("#white").should("be.visible");
  });

  it("renders about page animations", () => {
    cy.get("img#fairy")
      .scrollIntoView({ easing: "linear" })
      .should("have.class", "visible-right");
    cy.get("div.about-info").should("have.class", "visible-left");
    cy.get("div.about-summary")
      .scrollIntoView({ easing: "linear" })
      .should("have.class", "visible-left");
  });

  it("links on the project page has correct url", () => {
    cy.get("a#project-link1").should(
      "have.attr",
      "href",
      "https://mobile-eats.herokuapp.com/"
    );
    cy.get("a#project-link2").should(
      "have.attr",
      "href",
      "https://play.google.com/store/apps/details?id=com.alchemycodelab.mercury.app"
    );
    cy.get("a#project-link3").should(
      "have.attr",
      "href",
      "https://tashazun.github.io/Cute-Xylophone/"
    );
    cy.get("a#project-link4").should(
      "have.attr",
      "href",
      "https://deepfocus.herokuapp.com"
    );
  });

  it("renders all containers on the skills page", () => {
    cy.get(".design-container")
      .scrollIntoView({ easing: "linear" })
      .should("have.class", "visible");
    cy.get(".coding-container")
      .scrollIntoView({ easing: "linear" })
      .should("have.class", "visible");
    cy.get(".misc-container")
      .scrollIntoView({ easing: "linear" })
      .should("have.class", "visible");
  });

  it("footer links have the correct url", () => {
    cy.get("#github").should(
      "have.attr",
      "href",
      "https://github.com/Tashazun"
    );
    cy.get("#linkedin").should(
      "have.attr",
      "href",
      "https://linkedin.com/in/tashazuniga/"
    );
    cy.get("#twitter").should(
      "have.attr",
      "href",
      "https://twitter.com/artofobscura"
    );
  });
});
