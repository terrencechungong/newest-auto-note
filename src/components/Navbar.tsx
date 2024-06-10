import React, { RefObject, useEffect, useRef, useState } from 'react';
import './style/header.scss'
import StartButton from './StartButton';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isSticky, setIsSticky] = useState(false);
    const rect: number = 30;

    useEffect(() => {
        const handleScroll = () => {
            let y: number = window.scrollY;
            console.log(rect); // This is the y value relative to the viewport
            console.log(y, 'y');
            console.log(rect - y);
            if (rect - y <= 0) {
                setIsSticky(true);
                console.log('The component is at or above the top of the screen');
            } else {
                setIsSticky(false);
                console.log('The component is below the top of the screen');
            }

        };

        window.addEventListener('scroll', handleScroll);

        // Initial check
        handleScroll();

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`header ${isSticky ? 'sticky' : ''}`}>
            <div className='innerDiv'>
                <div className='nav-section'>
                    <p>Solutions</p>
                    <p>Pricing</p>
                    <p>Apps & Integrations</p>
                    <p>Resources</p>
                </div>
                <div className='authText'>
                    <p>Schedule a Demo</p>
                    <Link to="/login">Log In</Link>
                    <StartButton width={'min(132px)'} fSize={'14.1px'} />
                </div>
            </div>
        </div>
    )
};

export default Navbar;