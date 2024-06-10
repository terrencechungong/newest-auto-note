import React from 'react';
import logo from './logo.svg';
import './App.scss';
import MainPage from './components/MainPage';
import exampleImage from './assets/Meta-Logo.png'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AuthProvider} from './contexts/AuthProvider';
import LogIn from './components/LogIn';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className='main'>
      <AuthProvider>
        <Routes>
          <Route path="signup" element={<SignUp/>} />
          <Route path="landing" element={<MainPage />} />
          <Route path="login" element={<LogIn />} />
          <Route path="home" element={<HomePage />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
