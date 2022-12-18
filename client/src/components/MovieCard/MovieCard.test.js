import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import { MovieCard } from "components";

afterEach(cleanup);

console.error = jest.fn();

describe("<MovieCard />", () => {
  test("without movie", () => {
    // render(
    //   <Router>
    //     <MovieCard />
    //   </Router>
    // );
    // expect(console.error).toHaveBeenCalledTimes(1);
  });

  test("with movie", () => {
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

    // render(
    //   <Router>
    //     <MovieCard />
    //   </Router>
    // );
  });
});
