import classNames from "classnames/bind";
import PropTypes from "prop-types";

import classes from "./Title.module.css";

export const Title = ({ children, extraClassName }) => (
  <h1
    className={classNames.bind(classes)("title", {
      [extraClassName]: extraClassName,
    })}
  >
    {children}
  </h1>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
  extraClassName: PropTypes.string,
};
