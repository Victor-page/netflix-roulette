import { cleanup, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import { renderWithProviders } from "test/test-utils";

import { MovieCard } from "components";

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

describe("<MovieCard />", () => {
  test("without movie", () => {
    renderWithProviders(
      <Router>
        <MovieCard />
      </Router>
    );

    expect(console.error).toHaveBeenCalled();
  });

  test("with movie", async () => {
    const movie = {
      id: 337167,
      genres: ["Drama", "Romance", "Crime"],
      title: "Fifty Shades Freed",
      runtime: 106,
      overview:
        "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
      voteAverage: 6.1,
      posterPath:
        "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
      releaseDate: "2018-02-07",
    };

    renderWithProviders(
      <Router>
        <MovieCard
          id={movie.id}
          genres={movie.genres}
          title={movie.title}
          runtime={movie.runtime}
          overview={movie.overview}
          voteAverage={movie.voteAverage}
          posterPath={movie.posterPath}
          releaseDate={movie.releaseDate}
        />
      </Router>
    );

    expect(console.error).not.toHaveBeenCalled();

    const title = await screen.findByText(movie.title);

    expect(title.textContent).toBe(movie.title);
  });
});
