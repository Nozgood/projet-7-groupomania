import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineCamera } from 'react-icons/ai'

const Publish = () => {
  return (
    <section>
      <div className="publish__container">
        <AiOutlineUser className="publish__img" />
        <form className="publish__content">
          <input
            type="text"
            name="publish-content"
            id="content"
            placeholder="Quoi de neuf ?"
          />
          <AiOutlineCamera className="publish__content-camera" />
          <button className="btn" type='submit'> Publier</button>
        </form>
      </div>
    </section>
  )
}

export default Publish
