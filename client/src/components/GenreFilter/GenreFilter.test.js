import { render, cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";

import { GenreFilter } from "components";

afterEach(cleanup);

test("<GenreFilter />", () => {
  render(
    <Router>
      <GenreFilter />
    </Router>
  );

  const all = screen.getByTestId("all-genre");

  expect(all.classList.contains("isActive")).toBe(true);
});
