import React, { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineCamera } from 'react-icons/ai'

const Publish = () => {

  return (
    <section>
      <div className="publish__container">
        <AiOutlineUser className="publish__img" />
        <form className="publish__content">
          <input className='publish__content-text'
            type="text"
            name="content"
            id="content"
            placeholder="Quoi de neuf ?"
          />
          <div className="publish__content-file">
          <input className='publish__content-file--input'
            type="file"
            name="file"
            accept='.jpeg, .jpg, .png, .gif, .svg'
          />
          <AiOutlineCamera className='publish__content-file--camera' />
          </div>
          <button className="btn" type='submit'> Publier</button>
        </form>
      </div>
    </section>
  )
}

export default Publish
