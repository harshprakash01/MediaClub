import React, { useState } from 'react';
import '../CSS/PhoneNavbar.css';
import {Link} from "react-router-dom";


const PhoneNavbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };
    const handleClickScroll = (id) => {
        if (window.location.pathname === '/') {
            toggleMenu();
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else { toggleMenu();
            const newPath = `/#${id}`; // Construct the new path by appending the id
            window.history.pushState(null, '', newPath);
        }
    };

    return (
        <div className="wrap phone-headder">
            <a href={"/"}><img src={"/assets/logo.png"} alt="logo" className="phone-nav-logo"/></a>
            <div className={`burger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                <div className="strip burger-strip-2">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className={`menu ${isActive ? 'active' : ''}`}>
                <div className={`burger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                    <div className="strip burger-strip-2">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div >
                <ul>
                    <li className="text" onClick={() => handleClickScroll("hero-element")}><Link to="/">Home</Link></li>
                    <li className="text" onClick={() => handleClickScroll("about")}><Link>About</Link></li>
                    {/*<li className="text" onClick={() => handleClickScroll("work")}><Link>Work</Link></li>*/}
                    <li className="text" onClick={() => toggleMenu()}><Link to="/team">Team</Link></li>
                    <li className="text"><Link to="/event">Event</Link></li>
                    <li className="text" onClick={() => handleClickScroll("footer")}><Link to="/">Contact</Link></li>

                </ul>
            </div>

        </div>
    );
};

export default PhoneNavbar;
