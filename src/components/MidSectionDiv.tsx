import React from 'react';
import MidDivContent from './textContent/midSectionContent';
import './style/midsection.scss'

const MidSectionDiv: React.FC = () => {
    return (
        <div className='mainDivMid' >
            {MidDivContent.map((item, index) =>
                <div className='textAndPhotoGrid'>
                    <div style={{ color: 'white', backgroundColor: 'black' }}>11</div>
                    <div className='midDivTextContainer'>
                        <p className='midDivTextTitle'>{item.title}</p>
                        <p className='midDivPText'>{item.body}</p>
                    </div>
                </div>
            )}
            <p>yooo</p>

        </div>
    )
};

export default MidSectionDiv;