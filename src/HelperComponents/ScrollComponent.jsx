// ScrollComponent.js
import '../index.css';
// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';

const ScrollComponent = () => {
    const sectionRef = useRef(null);

    const scrollToSection = () => {
        window.scrollTo({
            top: sectionRef.current.offsetTop,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            <button onClick={scrollToSection}>Scroll Down</button>
            <div style={{ height: '100vh' }}></div> {/* Placeholder for initial content */}
            <div ref={sectionRef} style={{ height: '100vh', backgroundColor: 'lightblue' }}>
                Scroll Target Section
            </div>
        </div>
    );
};

export default ScrollComponent;
