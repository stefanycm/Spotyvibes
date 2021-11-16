import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({ myStyle, action, type, text }) => {
  return (
    <button
      className={`button button--${ myStyle }`}
      onClick={ action }
      type={ type }
    >
      { text }
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;