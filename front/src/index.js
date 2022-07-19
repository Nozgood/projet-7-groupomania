import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Homepage from './components/homepage/Homepage';
import Profile from './components/profile/Profile';
import UpdateProfile from './components/profile/UpdateProfile';
import Error from './components/error/Error';
import Test from './components/test/Test';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
      <Route path="updateprofile" element={<UpdateProfile />} />
      <Route path='test' element={<Test />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
