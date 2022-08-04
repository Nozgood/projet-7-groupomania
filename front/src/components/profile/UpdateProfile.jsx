import React from 'react'

import { AiOutlineCamera } from 'react-icons/ai'
import zoroCover from '../../assets/roronoa-zoro.jpeg'
import zoroProfile from '../../assets/zoro-profile.jpeg'

const UpdateProfile = () => {
    return (
        <div className="update__container">
            <form className="update">
                <div className="update__visual">
                    <div className="update__visual-cover">
                        <div className="update__visual-cover-content">
                            <img src={zoroCover} alt="roronoa zoro cover" />
                        </div>
                        <h2 className="update__visual-cover-title"> Photo de couverture</h2>
                        <AiOutlineCamera className='update__visual-cover-icon' />
                    </div>
                    <div className="update__visual-photo">
                        <div className="update__visual-photo-content">
                            <img src={zoroProfile} alt="zoro profile" />
                        </div>
                        <h2 className="update__visual-photo-title"> Photo de profil</h2>
                        <AiOutlineCamera className='update__visual-photo-icon' />
                    </div>
                </div>
                <div className="update__infos">
                    <div className="update__infos-identity">
                        <div className="update__infos-identity-name">
                            <input type="text" name="name" id="ok" placeholder='Nom'/>
                        </div>
                        <div className="update__infos-identity-surname">
                            <input type="text" name='surname' id='ok2' placeholder='Prénom' />
                        </div>
                    </div>
                    <div className="update__infos-bio">
                        <textarea name="bio" placeholder='Bio' rows='7'/>
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