import React, { useState } from 'react';

import newUser from '../../services/newUser';

const Signup = () => {

  const [userInfos, setUserInfos] = useState({

    userName: '',
    userSurname: '',
    email : '',
    password: '',
    passwordConfirm: '',
  })

  // listen the input changes
  const handleChange = (e)=> {
    const {name, value} = e.target;
    setUserInfos({
      ...userInfos,
      [name] : value
    })
  }

  //function when submit the form
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
        newUser(userInfos);
  
    } catch(err) {
      console.log(err);
    }
  }

  // to close the popup
  const close = ()=> {
    window.location.href = 'http://localhost:3000';
  }

  return (
    <div className="signup__container">
      <button className="signup__exit" onClick={close}>
        X
      </button>
      <h1 className="signup__title">S'inscrire</h1>
      <h2 className="signup__subtitle">Pour rejoindre la communauté !</h2>
      <form className="signup__form" onSubmit={handleSubmit}>
        <div className="signup__identity">
          <input 
            type="text" 
            name="userSurname" 
            placeholder="Prénom" 
            className='signup__identity-surname'
            onChange={handleChange}
          />
          <input 
            type="text" 
            name="userName" 
            placeholder="Nom" 
            className='signup__identity-name'
            onChange={handleChange}
          />
        </div>
        <div className="signup__mail">
          <input 
            type="email" 
            name="email" 
            placeholder="adresse mail" 
            className='signup__mail-input'
            onChange={handleChange}
          />
        </div>
        <div className="signup__password-container">
          <div className="signup__password">
            <input 
              type="password" 
              name="password" 
              placeholder="Mot de passe" 
              className='signup__password-input'
              onChange={handleChange}
            />
          </div>
          <div className="signup__password">
            <input 
              type="password" 
              name="passwordConfirm" 
              placeholder="Confirmer" 
              className='signup__password-input'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="signup__submit">
          <input 
            type="submit" 
            value="S'INSCRIRE" 
            className='signup__submit-input'
          />
        </div>
      </form>
    </div>
  );
};

export default Signup;
