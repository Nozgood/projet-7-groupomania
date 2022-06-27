import React from 'react'
import { FaUsers } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';

const Chat = () => {
  return (
    <section className='chat'>
      <div className="chat__container">
        <div className="chat__header">
          <FaUsers  className='chat__header-icon'/>
          <h2> Chat général</h2>
        </div>
        <div className="chat__content">
          <div className="chat__content-id">
            <AiOutlineUser className='chat__content-id--icon'/>
            <h3>User</h3>
          </div>
          <div className="chat__content-text">
            <p>Hello moi c'est User !</p>
          </div>
        </div>
        <div className="chat__content">
          <div className="chat__content-id">
            <AiOutlineUser className='chat__content-id--icon'/>
            <h3>User 2</h3>
          </div>
          <div className="chat__content-text">
            <p>Punaise on a le même nom !</p>
          </div>
        </div>
      </div>
      <div className="chat__new">
          <input type="text" name="chat-new-message" id="chat" placeholder='Nouveau message...' />
        </div>
    </section>
  )
}

export default Chat