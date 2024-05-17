import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../App.css'; // Import the CSS file
import '../index.css'


const Hero = () => {
    const [colorIndex, setColorIndex] = useState(0); // Initial color index

    const colors = ['--color-Dark1', '--color-Med1', '--color-Light1']; // Array of colors

    // Function to toggle color index
    const toggleColor = () => {
        setColorIndex((prevIndex) => (prevIndex + 1) % colors.length); // Cycle through colors array
    };

    // Effect to toggle color in a loop
    useEffect(() => {
        const interval = setInterval(toggleColor, 6000); // Change color every 6 seconds
        return () => clearInterval(interval); // Cleanup
    }, []); // Run effect only once on component mount

    return (
        <>
            <div className="stars">
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
            </div>
            {/* Hero content */}
            <div
                className="bg-hero-pattern bg-cover bg-no-repeat bg-center hero_item"
            >

                <div
                    className="mt-6 pt-3 heading-element center text-center"
                >

                    <h1 className="heading-element"
                        style={{color: `var(${colors[colorIndex]})`, transition: 'color 0.3s ease'}}>
                        NERIST
                    </h1>
                    <h1 className="heading-element"
                        style={{color: `var(${colors[colorIndex]})`, transition: 'color 0.3s ease'}}>
                        Media Club
                    </h1>
                </div>

                <div className="mt-4 pt-0 sub-heading center text-center subtitle-element">
                    <TypeAnimation
                        className="sub-heading"

                        sequence={[
                            'We produce graphics for NERIST',
                            3000,
                            'We produce graphics for SHRISTI',
                            3000,
                            'We produce graphics for SONYABYSS',
                            3000,
                            'We produce graphics for ETC',
                            3000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{fontSize: '2em', display: 'inline-block'}}
                        repeat={Infinity}
                    />
                </div>
            </div>
        </>
    );
};

export default Hero;
