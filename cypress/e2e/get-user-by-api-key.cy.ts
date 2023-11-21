describe("render current user data", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("should check for the presence of specific text", () => {
    cy.contains("Search user info using the API key").should("exist");
    cy.contains("label", "API key")
      .parent()
      .find("input")
      .type("er9bff8zc82ju2w6");
    cy.contains("button", "Submit").click();
    cy.url().should("include", "/profile");
    cy.contains("Felipe Muner").should("have.length", 1);
    cy.contains("Skills").should("exist");
    cy.contains("Video Answers").should("exist");
    cy.contains("button", "Jobs").click();
  });
});
