import { useParams, useLocation } from "react-router-dom";

import { MoviesList, MovieShelfFilterBar, ErrorBoundary } from "components";

import classes from "./Main.module.css";

import { useGetMovieShelfQuery } from "services";

export const Main = () => {
  const { searchQuery } = useParams();
  const { search } = useLocation();
  const sortOption = new URLSearchParams(search).get("sortBy");
  const genreOption = new URLSearchParams(search).get("genre");

  const queryRequest = { genreOption, sortOption, searchQuery };

  const {
    data: movieShelf,
    isLoading,
    isError,
  } = useGetMovieShelfQuery(queryRequest);

  return (
    <main className={classes.main}>
      <div className={`container ${classes["movie-shelf"]}`}>
        <MovieShelfFilterBar />
        {isLoading && <p>Loading...</p>}
        {isError && <p data-testid="error-message">There was an error</p>}
        {movieShelf && (
          <ErrorBoundary>
            <p className={classes.amount}>{movieShelf.length} movies found</p>
            <MoviesList moviesList={movieShelf} />
          </ErrorBoundary>
        )}
      </div>
    </main>
  );
};
