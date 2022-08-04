import React, { useState, useEffect } from 'react'

import { AiOutlineCamera } from 'react-icons/ai'
import defaultProfilePhoto from '../../assets/default-profile-photo.svg';
import defaultCoverPhoto from '../../assets/icon-left-font.svg';

const UpdateProfile = () => {

    // get datas (old or news) before sending 
    const [data, setData] = useState({
        userName: '',
        userSurname: '',
        profilePhoto: '',
        coverPhoto: '',
    })

    useEffect(()=> {
        const userId = localStorage.getItem('userId');
        fetch('http://localhost:3000/api/auth/' + userId)
            .then((res)=> {
                return res.json();
            })
            .then((data)=> {
                setData(data);
            })
            .catch((err)=> {
                console.log(err);
            })
    }, [])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = (event)=> {
        event.preventDefault();

    }
    // close the popup
    const close = ()=> {
        window.location.href = 'http://localhost:3000/profile'
    }
    return (
        <div className="update__container">
            <button className="signup__exit" onClick={close}>
                X
            </button>
            <form className="update">
                <div className="update__visual">
                    <div className="update__visual-cover">
                        <div className="update__visual-cover-content">
                            {
                                data.coverPhoto === undefined ? 
                                    <img src={defaultCoverPhoto} alt="cover" />
                                : 
                                    <img src={data.coverPhoto} alt="cover" />
                            }
                        </div>
                        <h2 className="update__visual-cover-title"> Photo de couverture</h2>
                        <div className="update__visual-cover-input">
                            <input 
                                type="file" 
                                name="coverPhoto"
                                accept='.jpeg, .jpg, .png, .gif, .svg'
                                className='update__visual-cover-input-content'
                                onChange={handleChange}
                            />
                            <AiOutlineCamera className='update__visual-cover-input--icon' />
                        </div>
                    </div>
                    <div className="update__visual-photo">
                        <div className="update__visual-photo-content">
                        {
                            data.profilePhoto === undefined ? 
                                <img src={defaultProfilePhoto} alt="profile" />
                            : 
                                <img src={data.profilePhoto} alt="profile" />
                        }
                        </div>
                        <h2 className="update__visual-photo-title"> Photo de profil</h2>
                        <div className="update__visual-photo-input">
                            <input 
                                type="file" 
                                name="profilePhoto"
                                accept='.jpeg, .jpg, .png, .gif, .svg'
                                className='update__visual-photo-input-content'
                                onChange={handleChange}
                            />
                            <AiOutlineCamera className='update__visual-photo-input--icon' />
                        </div>
                    </div>
                </div>
                <div className="update__infos">
                    <div className="update__infos-identity">
                        <div className="update__infos-identity-name">
                            <input 
                                type="text" 
                                name="userName" 
                                placeholder={data.userName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="update__infos-identity-surname">
                            <input 
                                type="text" 
                                name='userSurname'  
                                placeholder={data.userSurname} 
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="update__buttons">
                    <input type="submit" value="ENREGISTRER" className='update__buttons-submit' />
                    <button className="update__buttons-cancel"> ANNULER </button>
                </div>
            </form>
        </div>
    )
}

export default UpdateProfile