import React from 'react'
import logo from '../../../assets/icon-left-font-monochrome-white.svg';
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';


const Header = () => {
    return (
        <header>
            {/* logo */}
            <div className="header__img">
                <img src={logo} alt="groupomania" />
            </div>
            {/* navigation */}
            <div className="header__nav">
                <div className="header__nav-home">
                    <AiFillHome />
                    <a href="#home"> Accueil </a>
                </div>
                <div className="header__nav-profile">
                    <AiOutlineUser />
                    <a href="#profile"> Profil </a>
                </div>
            </div>
            {/* search */}
            <div className="header__search">
                <input type="search" name="search" id="search-bar" placeholder='Rechercher une personne...'/>
                <button className='btn'>
                    <BiSearch className='header__search-loop'/>
                </button>
            </div>
        </header>
    )
}

export default Header