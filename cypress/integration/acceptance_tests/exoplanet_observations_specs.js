describe("Exoplanet Observations", function() {
  beforeEach(() => {
    // Given a user visits exoplanet observations site
    cy.visit("http://localhost:3000");
  });

  xit("Add transit observation data", function() {
    // When they click on "add view observations"
    cy.contains("type").click();

    // Then, they can add transit observation data
    cy.url().should("include", "");
  });
});
