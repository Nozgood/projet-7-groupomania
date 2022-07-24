import React, { useState } from 'react'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';

import Signup from '../signup/Signup'

import logo from '../../assets/icon-left-font-monochrome-rose-red.svg'
import { AiFillEyeInvisible } from 'react-icons/ai'

import authenticate from '../../services/auth';

const Login = () => {

    // manage the signup popup 
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    // login states 
    const [credentials, setCredentials] = useState({
      email : "",
      password: "",
    })

    const handleChange = (e) => {
      const {name, value} = e.target;
      setCredentials({
        ...credentials,
        [name] : value
      })
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try{
        await authenticate(credentials);
      } catch(err) {
        console.log(err);
      }
    }

  return (
    <main className="login">
      <div className="login__img">
        <img src={logo} alt="groupomania" />
      </div>
      <h1 className="login__title">
        Groupomania, to Get In Touch With Your Coworkers !
      </h1>
      <section className="login__section">
        <form className="login__form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Adresse Mail"
            onChange={handleChange}
          />
          <div className="login__password">
            <input
              type="password"
              name="password"
              placeholder="Mot de passe ..."
              onChange={handleChange}
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
