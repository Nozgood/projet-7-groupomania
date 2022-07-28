import React, { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineCamera } from 'react-icons/ai'
import newPost from '../../../services/newPost'

const Publish = () => {

  const [postInfos, setPostInfos] = useState({
    userId: '',
    profilePhoto: '',
    userName: '',
    userSurname: '',
    date: '',
    content: '',
    imgUrl: '',
  })

  const handleChange = (e)=> {
    const {name, value} = e.target;
    setPostInfos({
      ...postInfos,
      [name] : value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await (newPost(postInfos));

    } catch (err) {
      console.log(err);
    }
  }
  return (
    <section>
      <div className="publish__container">
        <AiOutlineUser className="publish__img" />
        <form className="publish__content" onSubmit={handleSubmit}>
          <input className='publish__content-text'
            type="text"
            name="content"
            id="content"
            placeholder="Quoi de neuf ?"
            onChange={handleChange}
          />
          <div className="publish__content-file">
          <input className='publish__content-file--input'
            type="file"
            name="imgUrl"
            accept='.jpeg, .jpg, .png, .gif, .svg'
            onChange={handleChange}
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
