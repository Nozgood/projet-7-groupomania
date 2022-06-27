import React from 'react'
import { AiOutlineUser } from 'react-icons/ai';
import { BiLike } from 'react-icons/bi';
import { BiComment } from 'react-icons/bi';
import Bob from '../../../assets/Bob-leponge.png'

const Publication = () => {
  return (
    <section>
    <div className="publication">
    <div className="publication__container">
        <div className="publication__author">
          <AiOutlineUser className='publication__author-img'/>
          <div className="publication__author-text">
            <h2>Nowfeel SAFI</h2>
            <p> Il y a 12 minutes</p>
          </div>
        </div>
        <div className="publication__content">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint ducimus cumque ex corrupti omnis officia eaque dignissimos odio itaque quam.</p>
          <img src={Bob} alt="la big eponge" />
        </div>
        <div className="publication__reaction">
          <button className="btn publication__reaction-like">
            <BiLike className='publication__reaction-like-icon'/>
            <h3> J'AIME </h3>
          </button>
          <button className="btn publication__reaction-comment">
            <BiComment className='publication__reaction-comment-icon'/>
            <h3> COMMENTER</h3>
          </button>
        </div>
      </div>
      <div className="publication__container">
        <div className="publication__author">
          <AiOutlineUser className='publication__author-img'/>
          <div className="publication__author-text">
            <h2>Nowfeel SAFI</h2>
            <p> Il y a 22 minutes</p>
          </div>
        </div>
        <div className="publication__content">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint ducimus cumque ex corrupti omnis officia eaque dignissimos odio itaque quam.</p>
        </div>
        <div className="publication__reaction">
          <button className="btn publication__reaction-like">
            <BiLike className='publication__reaction-like-icon'/>
            <h3> J'AIME </h3>
          </button>
          <button className="btn publication__reaction-comment">
            <BiComment className='publication__reaction-comment-icon'/>
            <h3> COMMENTER</h3>
          </button>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Publication