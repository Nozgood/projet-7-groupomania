import React from 'react';
import logo from '../../../assets/icon-left-font-monochrome-white.svg';
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { BiExit } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {

  const handleSignOut = ()=> {
    localStorage.clear('token', 'admin');
    window.location.href = 'http://localhost:3000/';
  }
  return (
    <header>
      {/* logo */}
      <div className="header__img">
        <img src={logo} alt="groupomania" />
      </div>
      {/* navigation */}
      <nav className="header__nav">
        <div className="header__nav-home">
          <AiFillHome />
          <Link to="/"> Accueil </Link>
        </div>
        <div className="header__nav-profile">
          <AiOutlineUser />
          <Link to="profile">Profil</Link>
        </div>
      </nav>
      {/* search */}
      <div className="header__search">
        <input
          type="search"
          name="search"
          id="search-bar"
          placeholder="Rechercher une personne..."
        />
        <button className="btn">
          <BiSearch className="header__search-loop" />
        </button>
        <button className="btn" onClick={handleSignOut}>
          <BiExit />
        </button>
      </div>
    </header>
  );
};

export default Header;
