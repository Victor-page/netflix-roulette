import PropTypes from "prop-types";

import classes from "./SortSelector.module.css";

export const SortSelector = ({ options, value, onChange, label }) => (
  <div className={classes["sort-selector"]}>
    <label
      className={classes.label}
      htmlFor={label}
      data-testid="sort-selector-label"
    >
      Sort by
    </label>
    <select
      data-testid="sort-selector-select"
      className={classes.select}
      id={label}
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value} data-testid={value}>
          {label}
        </option>
      ))}
    </select>
  </div>
);

SortSelector.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
