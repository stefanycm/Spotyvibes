import React from 'react';
import PropTypes from 'prop-types';

import './input.scss';

const Input = ({ type, placeholder, name }) => {
  return (
    <input
      className="input"
      type={ type }
      placeholder={ placeholder }
      name={ name }
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;