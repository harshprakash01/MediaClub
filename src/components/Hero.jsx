// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect, useRef} from 'react';
import {TypeAnimation} from 'react-type-animation';

import '../App.css'; // Import the CSS file
import '../index.css'
import '../CSS/CrackingText.css'
import '../CSS/star.css'
import {Link} from "react-router-dom";
import Popup from "reactjs-popup";

function isPhone() {
    return window.innerWidth <= 600; // Adjust the threshold as needed
}

const Hero = () => {

    const [colorIndex, setColorIndex] = useState(0);

    const colors = ['white']; // Array of colors

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
            <div>
                {/* Hero content */}
                <div className="hero-container " style={{}}>
                    <div className="text-container ">
                        <div className="sub-heading center subtitle-element text-xl slide-right2">
                            Capturing Moments, Crafting Stories.
                        </div>
                        <div className=" pt-3 heading-element center text-left slide-right">
                            <h1
                                className="heading-element"
                                style={{
                                    color: `var(${colors[colorIndex]})`,
                                    transition: 'color 0.3s ease',
                                }}
                            >
                                NERIST
                            </h1>

                            <h1
                                className="heading-element"
                                style={{
                                    color: `var(${colors[colorIndex]})`,
                                    transition: 'color 0.3s ease',
                                }}
                            >
                                Media Club
                            </h1>
                        </div>
                        {!isPhone() && (
                            <div className="line slide-right2"></div>
                        )}

                        <div className="mt-4 pt-0 sub-heading center subtitle-element slide-up">
                            <TypeAnimation
                                className="sub-heading text-left"
                                sequence={[
                                    () => {
                                    },  // Initial delay without any action
                                    1000,      // 1 second delay
                                    'We produce graphics for NERIST',
                                    3000,
                                    'We produce graphics for SHRISTI',
                                    3000,
                                    'We produce graphics for SONYABYSS',
                                    3000,
                                    'We produce graphics for ETC',
                                    3000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{fontSize: '2em', display: 'inline-block'}}
                                repeat={Infinity}
                            />
                        </div>


                        <Link to={"/apply"}>
                            <button style={{marginTop: 40, marginLeft: 80}}
                                    className="css-button-sliding-to-left--green slide-up "
                            >
                                Join Us
                            </button>
                        </Link>


                    </div>

                    {/* Image on the right side */}
                    {/*<div className="image-container align-top">*/}
                    {/*    <img src="/assets/download.png" alt="logo"*/}
                    {/*         style={{height: 400}}*/}
                    {/*    />*/}

                    {/*</div>*/}
                </div>

            </div>
        </>

    );
};


export default Hero;
