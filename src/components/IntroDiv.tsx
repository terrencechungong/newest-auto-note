import React, { useState } from 'react';
import Navbar from './Navbar';
import './style/introdiv.scss';
import Button from '@mui/material/Button';
import TopDivContent from './textContent/landingPageContent';


const IntroDiv: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    let video_path: string = '../assets/video_landing.mp4'
    let intro_text: string = 'Introducing Meeting GenAI';
    let intro_summary: string = `Never take meeting notes again. Get transcripts,
    automated summaries, action items, and chat with Otter to get answers from your meetings.`;
    let button_sx = {
        borderRadius: '19px', // Set the border radius to round the edges
        textTransform: 'none', // Prevent text from being transformed to uppercase
        backgroundColor: '#007aff',
    };

    return (
        <>
            <div className='mainDiv'>
                <p className='introText'>{intro_text}</p>
                <p className='summaryText'>{intro_summary}</p>
                <Button variant="contained"
                    sx={button_sx}
                    disableElevation>
                    Start for free
                </Button>
                <div className='introDivGrid'>
                    <div className='topDivStyle'>
                        {TopDivContent.map((content, index) =>
                            <div className={`innerTopDiv ${selectedIndex === index ? 'selected' : ''}`}
                                key={index}
                                onClick={() => { setSelectedIndex(index) }}>
                                <p className={`innerDivTitle ${selectedIndex === index ? 'selectedText' : ''}`} key={index}>{content.title}</p>
                                <div className='innerDivBody'>{content.body}</div>
                            </div>
                        )}
                    </div>
                    <div className='introContentDiv'>
                        <video width="100%" height="100%" className='videoDiv' controls>
                            <source src="./video_landing.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='introContentDiv'></div>
                </div>
            </div>

        </>
    )
};

export default IntroDiv;