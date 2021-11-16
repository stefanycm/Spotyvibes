import React from 'react';

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

export default Input;