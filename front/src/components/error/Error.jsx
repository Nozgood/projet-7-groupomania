import React from 'react';
import logo from '../../assets/icon-left-font-monochrome-rose-red.svg';

const Error = () => {
  return (
    <div className="error">
      <img src={logo} alt="groupomania" />
      <h1 className="error__title">404 : cette page n'existe pas !</h1>
    </div>
  );
};

export default Error;
