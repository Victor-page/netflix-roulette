import { render, cleanup, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import { GenreFilter } from "components";

afterEach(cleanup);

describe("<GenreFilter />", () => {
  test("all genres are default", () => {
    render(
      <Router>
        <GenreFilter />
      </Router>
    );

    const all = screen.getByTestId("all-genre");

    expect(all.classList.contains("isActive")).toBe(true);
  });
});
