import { render } from 'react-dom';
import Login from './components/login/Login';
import Homepage from './components/homepage/Homepage';
import Profile from './components/profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
