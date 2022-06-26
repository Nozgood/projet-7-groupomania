import React from 'react'
import './index.css';

import Header from './components/homepage/header/Header';
import Coworker from './components/homepage/coworker/Coworker';
import Publish from './components/homepage/publish/Publish';
import Publication from './components/homepage/publication/Publication';
import Chat from './components/homepage/chat/Chat';
import Footer from './components/homepage/footer/Footer';

const App = () => {
    return (
        <>
            <Header />
            <Coworker />
            <Publish />
            <Publication />
            <Chat />
            <Footer />
        </>
    )
}

export default App