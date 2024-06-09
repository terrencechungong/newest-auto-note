import React from 'react';
import Navbar from './Navbar';
import IntroDiv from './IntroDiv';
import './style/mainpage.scss'
import MidSectionDiv from './MidSectionDiv';

const MainPage: React.FC = () => {
  return (
    <div>
      <div style={{ paddingTop: 30 }}>
      </div>

      <div className='content'>
        <Navbar />
        <IntroDiv />
        <MidSectionDiv />
      </div>
    </div>
  )
};

export default MainPage;