import React from 'react';

import logo from '../../../assets/icon.svg';
import './logo.scss';

const Logo = ({ withText }) => {
  return (
    <div className="logo">
      <img className="logo__img" src={ logo } alt="Logo Spotyvibes" />
      { withText && <p className="logo__text">Spotivibes</p> }
    </div>

  );
};

export default Logo;