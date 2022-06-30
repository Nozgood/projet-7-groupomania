import React from 'react'

import Header from './header/Header'
import Coworker from './coworker/Coworker'
import Publish from './/publish/Publish'
import Publication from './publication/Publication'
import Chat from './chat/Chat'
import Footer from './footer/Footer'
import '../../index.css'

const Homepage = () => {
  return (
    <>
      <Header />
      <div className="home">
        <div className="home__left">
          <Coworker />
        </div>
        <div className="home__middle">
          <Publish />
          <Publication />
        </div>
        <div className="home__right">
          <Chat />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Homepage
