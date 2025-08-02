/// <reference types="cypress" />

describe("TeamsGrid E2E – happy path", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/teams**", { fixture: "teams.json" }).as(
      "getTeams"
    );
    cy.visit("/");
  });

  it("shows loading then renders the grid", () => {
    cy.contains("Loading teams…").should("be.visible");
    cy.wait("@getTeams");
    cy.get("div.grid").children().should("have.length", 2);
    cy.contains("ATL").should("exist");
    cy.contains("Boston Celtics").should("exist");
  });

  it("clicking on a team card navigates to the detail view", () => {
    cy.wait("@getTeams");
    cy.get("div.grid > div").first().click();
    cy.contains("← Back to teams").should("be.visible");
  });

  it("clicking on the team abbreviation navigates to the detail view", () => {
    cy.wait("@getTeams");
    cy.get("div.grid > div").first().find("h3").click();
    cy.contains("← Back to teams").should("be.visible");
  });
});

describe("TeamsGrid E2E – sad path (500)", () => {
  it("renders an error message when the API fails", () => {
    cy.intercept("GET", "**/api/teams**", { statusCode: 500 }).as(
      "getTeamsError"
    );
    cy.visit("/");

    cy.contains("Loading teams…").should("be.visible");

    cy.wait("@getTeamsError", { timeout: 10000 });

    cy.contains("Error: Network response was not ok", {
      timeout: 10000,
    }).should("be.visible");
  });
});
