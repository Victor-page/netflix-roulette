import PropTypes from "prop-types";

import classes from "./MainHeader.module.css";

import { Navigation } from "components";

export const MainHeader = ({ children }) => (
  <section className={classes["main-header"]}>
    <Navigation />
    {children}
  </section>
);

MainHeader.propTypes = {
  children: PropTypes.node.isRequired,
};
