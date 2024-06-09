import React, { useState } from 'react';
import Navbar from './Navbar';
import './style/introdiv.scss';
import TopDivContent from './textContent/landingPageContent';
import exampleImage from '../assets/Meta-Logo.png';
import StartButton from './StartButton';


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
                <StartButton width={'190px'} fSize={'23px'}/>
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
                    <div className='introContentDiv yo'>
                        <video width="100%" height="100%" className='videoDiv' loop autoPlay muted>
                            <source src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ca439063af578816bf4724_2792_AI%20Meeting%20Assistant_1600%20x%20900_white%20bg_080224-transcode.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='introContentDiv logoCol'>
                        <div className='logoColOne'>
                            <div style={{ color: 'white', backgroundColor: 'black' }}>11</div>
                            <div style={{ color: 'white', backgroundColor: 'black' }}>11</div>
                            <div style={{ color: 'white', backgroundColor: 'black' }}>11</div>
                        </div>
                        <div className='logoColTwo'>
                        <div style={{ color: 'white', backgroundColor: 'black' }}>11</div>
                            <div style={{ color: 'white', backgroundColor: 'black' }}>11</div>
                            <div style={{ color: 'white', backgroundColor: 'black' }}>11</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default IntroDiv;