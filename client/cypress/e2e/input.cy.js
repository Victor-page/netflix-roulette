describe("input", () => {
  it("verifies input", () => {
    cy.visit("http://localhost:3000");
    cy.url().should("eq", "http://localhost:3000/search");
    cy.get('[data-testid="search-movies-input"]').type("batman");
    cy.get('[data-testid="search-movies-button"]').click();
    cy.url().should("eq", "http://localhost:3000/search/batman");
    const requestUrl = "http://localhost:4000/movies?search=batman";
    cy.intercept(requestUrl, (req) => expect(req.url).should("eq", requestUrl));
  });
});
