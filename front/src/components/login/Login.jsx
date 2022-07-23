import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import Signup from '../signup/Signup'
import logo from '../../assets/icon-left-font-monochrome-rose-red.svg'
import { AiFillEyeInvisible } from 'react-icons/ai'

const Login = () => {


    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

  return (
    <main className="login">
      <div className="login__img">
        <img src={logo} alt="groupomania" />
      </div>
      <h1 className="login__title">
        Groupomania, to Get In Touch With Your Coworkers !
      </h1>
      <section className="login__section">
        <form className="login__form" action="/api/auth/login" method='post'>
          <input
            type="email"
            name="email"
            placeholder="Adresse Mail"
          />
          <div className="login__password">
            <input
              type="password"
              name="password"
              placeholder="Mot de passe ..."
            />
            <AiFillEyeInvisible className="login__password-icon" />
          </div>
          <input type="submit" value="SE CONNECTER" id="connect" />
        </form>
        <a className="login__passowrd--forget" href="#home">Mot de passe oublié ?</a>
        <div className="login__signup">
        <button className="login__signup-btn" onClick={()=> {setOpen(o => !o)}}> 
          CRÉER UN COMPTE
        </button>
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
          <Signup />
        </Popup>
      </div>
      </section>
    </main>
  )
}

export default Login
