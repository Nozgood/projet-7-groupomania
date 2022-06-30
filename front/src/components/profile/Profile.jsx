import React from 'react'
import Header from '../homepage/header/Header'
import zoro from '../../assets/roronoa-zoro.jpeg'
import zoroProfile from '../../assets/zoro-profile.jpeg'
import { RiToolsFill } from 'react-icons/ri'
import Publication from '../homepage/publication/Publication';

const Profile = () => {
  return (
    <>
      <Header />
      <main id='profile'>
        <div className="profile__container">
          <div className="profile__cover">
            <img src={ zoro } alt="couverture de roronoa zoro" />
          </div>
          <div className="profile__infos">
          <div className="profile__infos-visual">
            <div className="profile__infos-img">
              <img src={zoroProfile} alt="profil zoro" />
              </div>
              <div className="profile__infos-text">
                <h1 className="profile__infos-text-name">Roronoa Zoro</h1>
              </div>
          </div>
          <div className="profile__infos--modification">
            <button type="submit">
              <RiToolsFill className='profile__infos--modification-icon' />
              <p className="profile__modification-text"> Modifier le profil</p>
            </button>
          </div>
          </div>
          </div>
          <div className="profile__publications">
            <Publication />
          </div>
      </main>
    </>
  )
}

export default Profile