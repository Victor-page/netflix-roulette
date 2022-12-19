describe("select", () => {
  it("validates select", () => {
    cy.visit("http://localhost:3000");
    cy.url().should("eq", "http://localhost:3000/search");
    const select = cy.get('[data-testid="sort-selector-select"]');
    select.should("be.visible");
    select.should("have.value", "vote_average");
    select.select("release_date");
    select.should("have.value", "release_date");
    cy.url().should("eq", "http://localhost:3000/search?sortBy=release_date");
    cy.get('[data-testid="movies-list"]');
    const firstMovieImage = cy.get(
      '[data-testid="movies-list"] li:first-child [data-testid="movie-image"]'
    );
    firstMovieImage.should(
      "have.attr",
      "src",
      "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg"
    );
  });
});
