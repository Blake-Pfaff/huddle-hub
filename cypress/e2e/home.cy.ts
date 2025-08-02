describe("HuddleHub Test", () => {
  it("renders the Home text", () => {
    cy.visit("/");
    cy.contains("h1", "NBA Teams").should("be.visible");
  });
});
