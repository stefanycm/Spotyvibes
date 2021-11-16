import React from 'react';

import './button.scss';

const Button = ({
  myStyle = 'primary',
  action = undefined,
  type = 'button',
  text = '',
}) => {
  return (
    <button
      className={`button button--${myStyle}`}
      onClick={action}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;