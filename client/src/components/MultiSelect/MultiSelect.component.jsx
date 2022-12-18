import { useField } from "formik";
import PropTypes from "prop-types";

import { BaseSelect } from "components";

export const MultiSelect = ({
  extraClassName,
  placeholder,
  options,
  id,
  field,
}) => {
  const [{ name }, state, { setValue, setTouched }] = useField(field.name);

  const onChange = (value) => setValue(value);

  return (
    <BaseSelect
      value={state?.value}
      onChange={onChange}
      onBlur={setTouched}
      name={name}
      extraClassName={extraClassName}
      placeholder={placeholder}
      options={options}
      isMulti
      id={id}
    />
  );
};

MultiSelect.propTypes = {
  id: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
  extraClassName: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
