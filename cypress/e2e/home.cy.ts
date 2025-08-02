describe("HuddleHub Home Smoke Test", () => {
  it("renders the Home text", () => {
    cy.visit("/");
    cy.contains("div", "Home").should("be.visible");
  });
});
