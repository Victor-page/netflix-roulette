import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { Field, Formik, Form, useField } from "formik";

import { validationSchema, initialValues, genresOptionsList } from "./model";
import { useAddMovieMutation, useEditMovieMutation } from "services";

import { Button, MultiSelect } from "components";

import classes from "./BaseForm.module.css";

const Input = ({ as = "input", label, ...props }) => {
  const [field, { touched, error }] = useField(props);

  const formControlClasses = (invalid) =>
    classNames.bind(classes)("form-control", { invalid });

  return (
    <div className={formControlClasses(touched && error)}>
      <label htmlFor={props.id || props.name}>{label}</label>

      {as instanceof String ? (
        React.createElement(as, { ...field, ...props })
      ) : (
        <Field {...field} {...props} component={as} />
      )}

      {touched && error && <p className={classes["error-text"]}>{error}</p>}
    </div>
  );
};

export const BaseForm = ({
  movieToEdit,
  onAddingError,
  onAddingSuccess,
  onEditingError,
  onEditingSuccess,
}) => {
  const [addedMovie, setAddedMovie] = useState();
  const [editedMovie, setEditedMovie] = useState();
  const [
    addMovie,
    {
      error: addingError,
      isLoading: isAddingLoading,
      isSuccess: isAddingSuccess,
      isError: isAddingError,
      data: addingResponse,
    },
  ] = useAddMovieMutation();
  const [
    editMovie,
    {
      error: editingError,
      isLoading: isEditingLoading,
      isSuccess: isEditingSuccess,
      isError: isEditingError,
      data: editingResponse,
    },
  ] = useEditMovieMutation();

  useEffect(() => {
    isAddingError && onAddingError(addingError);
  }, [isAddingError, onAddingError, addingError]);

  useEffect(() => {
    isEditingError && onEditingError(editingError);
  }, [isEditingError, onEditingError, editingError]);

  const addingMovieTitle = addingResponse?.title;
  const editingMovieTitle = editingResponse?.title;

  useEffect(() => {
    isAddingSuccess && onAddingSuccess(addingMovieTitle);
  }, [isAddingSuccess, onAddingSuccess, addingMovieTitle]);

  useEffect(() => {
    isEditingSuccess && onEditingSuccess(editingMovieTitle);
  }, [isEditingSuccess, onEditingSuccess, editingMovieTitle]);

  useEffect(() => {
    editedMovie && editMovie(editedMovie);
  }, [editMovie, editedMovie]);

  useEffect(() => {
    addedMovie && addMovie(addedMovie);
  }, [addMovie, addedMovie]);

  const submitHandler = (values, { setSubmitting, resetForm }) => {
    movieToEdit ? setEditedMovie(values) : setAddedMovie(values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={movieToEdit || initialValues}
      validationSchema={validationSchema}
      onSubmit={submitHandler}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className={classes["control-group"]}>
            <Input
              label="Title"
              name="title"
              id="title"
              type="text"
              placeholder="Name of the movie"
            />
            <Input
              label="Release Date"
              name="releaseDate"
              id="releaseDate"
              type="date"
            />
          </div>

          <div className={classes["control-group"]}>
            <Input
              label="Movie Url"
              name="posterPath"
              id="posterPath"
              type="url"
              placeholder="https://"
            />
            <Input
              label="Rating"
              name="voteAverage"
              id="voteAverage"
              placeholder="7.8"
              type="number"
            />
          </div>

          <div className={classes["control-group"]}>
            <Input
              as={MultiSelect}
              label="Genre"
              name="genres"
              id="genres"
              options={genresOptionsList}
              placeholder="Select Genre"
              extraClassName={classes.select}
            />
            <Input
              label="Runtime"
              name="runtime"
              id="runtime"
              placeholder="Minutes"
              type="number"
            />
          </div>

          <Input
            label="Overview"
            name="overview"
            id="overview"
            placeholder="Movie Description"
            as="textarea"
          />

          <div className={classes["form-actions"]}>
            <Button
              primary
              inverted
              extraClassName={classes["confirm-button"]}
              type="reset"
            >
              Reset
            </Button>
            <Button
              primary
              type="submit"
              extraClassName={classes["submit-button"]}
              disabled={isSubmitting}
            >
              {isAddingLoading || isEditingLoading ? "...Submitting" : "Submit"}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
