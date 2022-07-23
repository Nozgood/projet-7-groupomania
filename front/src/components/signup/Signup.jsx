import React from 'react';

const Signup = () => {
  return (
    <div className="signup__container">
      <h1 className="signup__title">S'inscrire</h1>
      <h2 className="signup__subtitle">Pour rejoindre la communauté !</h2>
      <form action="/api/auth/signup" method='post' className="signup__form">
        <div className="signup__identity">
          <input type="text" name="userSurname" placeholder="Prénom" className='signup__identity-surname'/>
          <input type="text" name="userName" placeholder="Nom" className='signup__identity-name'/>
        </div>
        <div className="signup__mail">
          <input type="email" name="email" placeholder="adresse mail" className='signup__mail-input'/>
        </div>
        <div className="signup__password-container">
          <div className="signup__password">
            <input type="password" name="password" placeholder="Mot de passe" className='signup__password-input'/>
          </div>
          <div className="signup__password">
            <input type="password" name="passwordConfirm" placeholder="Confirmer" className='signup__password-input'/>
          </div>
        </div>
        <div className="signup__submit">
          <input type="submit" value="S'INSCRIRE" className='signup__submit-input'/>
        </div>
      </form>
    </div>
  );
};

export default Signup;
