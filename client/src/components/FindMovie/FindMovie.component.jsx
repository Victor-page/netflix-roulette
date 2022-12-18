import PropTypes from "prop-types";

import { SearchMoviesForm, Title } from "components";

import classes from "./FindMovie.module.css";

export const FindMovie = ({ urlSearchParameter, onSubmit }) => (
  <section className={classes["sub-header"]}>
    <Title>Find your movie</Title>
    <SearchMoviesForm
      urlSearchParameter={urlSearchParameter}
      onSubmit={onSubmit}
    />
  </section>
);

FindMovie.propTypes = {
  urlSearchParameter: PropTypes.string,
  onSubmit: PropTypes.func,
};
