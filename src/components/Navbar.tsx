import React, { RefObject, useEffect, useRef, useState } from 'react';
import './style/header.scss'

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
        <div className={`header ${isSticky ? 'sticky' : ''}`}>yoo</div>
    )
};

export default Navbar;