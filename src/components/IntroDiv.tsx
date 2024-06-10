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
                <div className='introText'><p className='introo'>{intro_text}</p></div>
                <div className='summaryText'>{intro_summary}</div>
                <StartButton width={'clamp(220px, 8vw, 260px)'} fSize={'25px'} />
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
                            <img src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ba7bb12bd967300c25e950_Amazon.svg" width="80%" height="80%" alt="Description" />
                            <img src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/6643ff8070ff4a555db377f9_grant-thorton.svg" width="80%" height="80%" alt="Description" />
                            <img src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/61f1554b86ff2cd5e536307b_ibm-logo.svg" width="80%" height="80%" alt="Description" />
                        </div>
                        <div className='logoColTwo'>
                            <img src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ba7befab663a9b615307aa_NBC.svg" width="80%" height="80%" alt="Description" />
                            <img src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ba7bb18129c7a788209ba9_Walgreens.svg" width="80%" height="80%" alt="Description" />
                            <img src="https://cdn.prod.website-files.com/618e9316785b3582a5178502/65ba7bb1f604c692aa2850c8_UCLA.svg" width="80%" height="80%" alt="Description" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default IntroDiv;