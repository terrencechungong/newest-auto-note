import React from 'react';
import Navbar from './Navbar';
import IntroDiv from './IntroDiv';
import './style/mainpage.scss'

const MainPage: React.FC = () => {
    return (
      <div>
      <Navbar/>
        <div className='content'>
          <IntroDiv/>
        </div>
      </div>
    )
  };
  
  export default MainPage;