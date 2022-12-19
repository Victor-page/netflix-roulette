import classNames from "classnames/bind";
import PropTypes from "prop-types";

import classes from "./Header.module.css";

export const Header = ({ children, extraClassName }) => (
  <header
    className={classNames.bind(classes)("header", {
      [extraClassName]: extraClassName,
    })}
  >
    <div className={`container ${classes["header-container"]}`}>{children}</div>
  </header>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
  extraClassName: PropTypes.string,
};
