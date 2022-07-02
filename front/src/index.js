import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Homepage from './components/homepage/Homepage';
import Profile from './components/profile/Profile';
import Error from './components/error/Error';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
