import Select, { components } from "react-select";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import { Button } from "components";

import classes from "./BaseSelect.module.css";

import { ReactComponent as CloseIcon } from "icons/close.svg";

const closeIconWrapperStyle = {
  paddingRight: "6px",
  paddingTop: "6px",
  paddingBottom: "4px",
  marginLeft: "auto",
  backgroundColor: "transparent",
};

const closeIconStyle = {
  display: "block",
};

export const BaseSelect = ({
  options,
  isMulti,
  id,
  value,
  onChange,
  onBlur,
  placeholder,
  extraClassName,
  closeMenuOnSelect,
  menuIsOpen,
  selectRef,
  onCloseOptions,
  isClosingMenu,
}) => (
  <Select
    menuIsOpen={menuIsOpen}
    ref={selectRef}
    styles={{
      MenuList: (provided, { isFocused }) => ({
        ...provided,
        backgroundColor: isFocused && "#555555",
        borderRadius: 4,
      }),
      option: (provided, { isFocused }) => ({
        ...provided,
        backgroundColor: isFocused && "#f65261",
      }),
    }}
    closeMenuOnSelect={closeMenuOnSelect}
    options={options}
    isMulti={isMulti}
    id={id}
    openMenuOnFocus={true}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    placeholder={placeholder}
    className={classNames.bind(classes)("base-select", {
      [extraClassName]: extraClassName,
    })}
    isClearable={false}
    isSearchable={false}
    components={{
      IndicatorSeparator: null,
      MenuList: (props) => (
        <>
          {isClosingMenu && (
            <Button style={closeIconWrapperStyle} onClick={onCloseOptions}>
              <CloseIcon style={closeIconStyle} />
            </Button>
          )}
          <components.MenuList {...props}>{props.children}</components.MenuList>
        </>
      ),
    }}
  />
);

BaseSelect.propTypes = {
  isClosingMenu: PropTypes.bool,
  selectRef: PropTypes.object,
  menuIsOpen: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  id: PropTypes.string.isRequired,
  value: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  extraClassName: PropTypes.string.isRequired,
  closeMenuOnSelect: PropTypes.bool,
  onCloseOptions: PropTypes.func,
  dropdownIndicator: PropTypes.object,
};
