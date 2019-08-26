import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ fieldName, labelText }) => {
  return (
    <label htmlFor={fieldName}>
      {labelText}
      <input type="text" name={fieldName} />
    </label>
  );
};

Input.propTypes = {
  fieldName: PropTypes.string,
  labelText: PropTypes.string,
};

export default Input;
