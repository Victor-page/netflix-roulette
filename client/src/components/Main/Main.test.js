import { MemoryRouter as Router } from "react-router-dom";
import { screen, waitFor, cleanup } from "@testing-library/react";
import { rest } from "msw";

import { renderWithProviders } from "test/test-utils";
import { server } from "test/server";

import { Main } from "components";

afterEach(cleanup);

describe("<Main />", () => {
  test("handles good response", async () => {
    renderWithProviders(
      <Router>
        <Main />
      </Router>
    );

    screen.getByText("Loading...");

    await waitFor(() => {
      expect(screen.getByTestId("movies-list")).toBeInTheDocument();
    });
  });

  it("handles error response", async () => {
    server.use(
      rest.get("http://localhost:4000/movies", (_req, res, ctx) => {
        return res.once(
          ctx.status(500),
          ctx.json({ message: "There was an error" })
        );
      })
    );

    renderWithProviders(
      <Router>
        <Main />
      </Router>
    );

    screen.getByText("Loading...");

    const errorMessage = await screen.findByTestId("error-message");

    await waitFor(() => {
      expect(errorMessage.textContent).toBe("There was an error");
    });
  });
});
