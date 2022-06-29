import React from 'react'
import logo from '../../assets/icon-left-font-monochrome-rose-red.svg'
import {AiFillEyeInvisible} from 'react-icons/ai';

const Login = () => {
    return (
        <main>
    <div className="login__img">
        <img src={logo} alt="groupomania" />
    </div>
    <h1 className="login__title">
        Groupomania, to Get In Touch With Your Coworkers !
    </h1>
    <section className='login__section'>
    <form className='login__form' action="">
        <input type="email" name="mail" id="login-mail" placeholder='Adresse Mail' />
        <div className="login__password">
            <input type="password" name="password" id="login-mdp" placeholder='Mot de passe ...' />
            <AiFillEyeInvisible  className='login__password-icon'/>
        </div>
    <input type="submit" value="SE CONNECTER" id='connect'/>
    </form>
    <a className='login__passowrd--forget' href="#"> Mot de passe oublié ?</a>
    <button className="login__signup"> CRÉER UN COMPTE</button>
    </section>
    </main>
    )
}

export default Login