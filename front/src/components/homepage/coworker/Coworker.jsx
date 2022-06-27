import React from 'react'
import { AiOutlineUser } from 'react-icons/ai';

const Coworker = () => {
  return (
    <section>
      <div className="coworker__container">
        <h2 className="coworker__title">Collègues inscrits</h2>
        <div className="coworker__content">
          <AiOutlineUser className='coworker__content-img'/>
          <p className="coworker__content-name"> User </p>
        </div>
        <div className="coworker__content">
          <AiOutlineUser className='coworker__content-img'/>
          <p className="coworker__content-name"> User 2</p>
        </div>
      </div>
    </section>
  )
}

export default Coworker