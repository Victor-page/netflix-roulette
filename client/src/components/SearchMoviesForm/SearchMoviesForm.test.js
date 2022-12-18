import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";

import { SearchMoviesForm } from "components";

afterEach(cleanup);

test("<SearchMoviesForm />", async () => {
  render(
    <Router>
      <SearchMoviesForm />
    </Router>
  );
  // screen.debug();
  const handleSubmit = jest.fn();

  const searchMoviesForm = screen.getByTestId("search-movies-form");
  const searchMoviesButton = screen.getByTestId("search-movies-button");
  const searchMoviesInput = screen.getByTestId("search-movies-input");

  expect(searchMoviesInput).toHaveValue("");

  // const searchQuery = 'batman';

  // userEvent.type(searchMoviesInput, searchQuery);
  // fireEvent.click(searchMoviesButton);

  // expect(handleSubmit).toHaveBeenCalledTimes(1);
});
