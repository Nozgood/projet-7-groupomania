import React, { useState, useEffect } from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';

import zoro from '../../assets/roronoa-zoro.jpeg'
import zoroProfile from '../../assets/zoro-profile.jpeg'
import { RiToolsFill } from 'react-icons/ri'
import { BiLayout } from 'react-icons/bi';
import defaultProfilePhoto from '../../assets/default-profile-photo.svg';
import defaultCoverPhoto from '../../assets/icon-left-font.svg';

import Header from '../homepage/header/Header'
import Publication from '../homepage/publication/Publication'
import UpdateProfile from './UpdateProfile'; 

import oneUser from '../../services/oneUser';

const Profile =  () => {

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const [data, setData] = useState({
    userName: '',
    userSurname: '',
    profilePhoto: '',
    coverPhoto: '',
  });

  const [isDataLoaded, setDataLoaded] = useState(false);

  useEffect(()=> {
    const userId = localStorage.getItem('userId');
    fetch('http://localhost:3000/api/auth/' + userId)
    .then((res)=> {
        return res.json()
    })
    .then((data)=> {
        setData(data);
        setDataLoaded(true);
    })
  }, [])


  return isDataLoaded ? (
    <>
      <Header />
      <main id="profile">
        <div className="profile__container">
          <div className="profile__cover">
          {
            data.coverPhoto === undefined ? 
              <img src={defaultCoverPhoto} alt="couverture" /> 
            : 
              <img src={data.coverPhoto} alt="okok" /> 
          }
          </div>
          <div className="profile__infos">
            <div className="profile__infos-visual">
              <div className="profile__infos-img">
              {
                data.profilePhoto === undefined ? 
                  <img src={defaultProfilePhoto} alt="profil zoro" />
                : 
                  <img src={data.profilePhoto} alt='profil' />
              } 
              </div>
              <div className="profile__infos-text">
                <h1 className="profile__infos-text-name">{data.userName + ' ' + data.userName}</h1>
              </div>
            </div>
            <div className="profile__infos--modification">
              <button type="submit" onClick={()=> {setOpen(o => !o)}}>
                <RiToolsFill className="profile__infos--modification-icon" />
                <p className="profile__modification-text">Modifier le profil</p>
              </button>
              <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <UpdateProfile />
              </Popup>
            </div>
          </div>
        </div>
        <div className="profile__publications">
          <Publication />
        </div>
      </main>
    </>
  ) : (
    <div className="loading">Loading...</div>
  )
}

export default Profile