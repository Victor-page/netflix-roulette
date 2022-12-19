import { render, cleanup, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import { SearchMoviesForm } from "components";

afterEach(cleanup);

describe("<SearchMoviesForm />", () => {
  test("renders input", async () => {
    render(
      <Router>
        <SearchMoviesForm />
      </Router>
    );
    // screen.debug();

    const searchMoviesForm = screen.getByTestId("search-movies-form");
    const searchMoviesButton = screen.getByTestId("search-movies-button");
    const searchMoviesInput = screen.getByTestId("search-movies-input");

    expect(searchMoviesForm).toBeInTheDocument();
    expect(searchMoviesButton).toBeInTheDocument();
    expect(searchMoviesInput).toBeInTheDocument();
  });

  test("empty value is default", () => {
    render(
      <Router>
        <SearchMoviesForm />
      </Router>
    );

    const searchMoviesInput = screen.getByTestId("search-movies-input");

    expect(searchMoviesInput).toHaveValue("");
  });
});
