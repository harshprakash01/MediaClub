import React, {useEffect, useState} from 'react';
import logo from '/assets/logo.png'; // Import the logo image
import { Link } from 'react-router-dom';
import { useScroll } from 'framer-motion';

const Navbar = () => {

    const { scrollY } = useScroll();  // `scrollY` is provided by Framer Motion's `useScroll`
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        return scrollY.onChange((currentScrollY) => {
            if (currentScrollY > lastScrollY) {
                setShowNavbar(false);  // Hide navbar when scrolling down
            } else {
                setShowNavbar(true);   // Show navbar when scrolling up
            }

            setLastScrollY(currentScrollY);
        });
    }, [scrollY, lastScrollY]);


    const handleClickScroll = (id) => {
        if (window.location.pathname === '/') {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            const newPath = `/#${id}`; // Construct the new path by appending the id
            window.history.pushState(null, '', newPath);
        }
    };
    return (

        <div id="header" className="fixed-header">
            <div className="container2">
                <nav id="header-nav">
                    <a href="/"><img src={logo} className="logo" alt="logo" /></a>
                    <ul id="sidemenu">
                        <li className="text" onClick={() => handleClickScroll("hero-element")}><Link to="/">Home</Link>
                        </li>
                        <li></li>
                        <li className="text" onClick={() => handleClickScroll("about")}><Link>About</Link></li>
                        <li></li>
                        <li className="text" onClick={() => handleClickScroll("work")}><Link>Work</Link></li>
                        <li></li>
                        <li className="text"><Link to="/team">Team</Link></li>
                        <li></li>
                        <li className="text"><Link to="/event">Event</Link></li>
                        <li></li>
                        <li className="text" onClick={() => handleClickScroll("footer")}><Link to="/">Contact</Link>
                        </li>
                        <li></li>


                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
