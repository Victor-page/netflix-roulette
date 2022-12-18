import PropTypes from "prop-types";

import { Title } from "components/Title";

import classes from "./MovieDetail.module.css";

export const MovieDetail = ({
  title,
  rating,
  genres,
  runtime,
  overview,
  year,
  posterPath,
}) => (
  <article className={classes["movie-detail"]}>
    <img src={posterPath} alt={title} className={classes.poster} />
    <section className={classes["other-details"]}>
      <Title extraClassName={classes.title}>
        {title}
        {rating && <span className={classes.rating}>{rating}</span>}
      </Title>
      <p className={classes.genres}>{genres.join(" & ")}</p>
      <p className={classes["release-year-and-runtime"]}>
        <span className={classes["release-year"]}>{year}</span>
        {runtime && <span>{runtime}</span>}
      </p>
      <p className={classes.overview}>{overview}</p>
    </section>
  </article>
);

MovieDetail.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  posterPath: PropTypes.string.isRequired,
  runtime: PropTypes.string,
  rating: PropTypes.number,
  voteAverage: PropTypes.number,
  overview: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};
