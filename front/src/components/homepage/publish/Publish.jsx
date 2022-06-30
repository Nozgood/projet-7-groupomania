import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineCamera } from 'react-icons/ai'

const Publish = () => {
  return (
    <section>
      <div className="publish__container">
        <AiOutlineUser className="publish__img" />
        <div className="publish__content">
          <input
            type="text"
            name="publish-content"
            id="content"
            placeholder="Quoi de neuf ?"
          />
          <AiOutlineCamera className="publish__content-camera" />
        </div>
        <button className="btn"> Publier</button>
      </div>
    </section>
  )
}

export default Publish
