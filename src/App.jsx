import './CSS/background.scss';
import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import "./CSS/Phone.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PhoneNavbar, Navbar, Hero, About } from "./components/index";
import Work from "./components/Work.jsx"

function isPhone() {
    return window.innerWidth <= 600; // Adjust the threshold as needed
}

function App() {
    const [isMobile, setIsMobile] = useState(isPhone());
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(isPhone());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollToSection = () => {
        const section = document.getElementById('about'); // Replace 'about' with the id of your target section
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };




    return (
        <div className="app-container">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center hero_itemn"  style={{ backgroundImage: `url("/assets/meow3.png")`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center -100px',
                                    width: `100vw`
                                }}>
                                    {isMobile ? <PhoneNavbar/> : <Navbar/>}
                                    <Hero/>
                                </div>
                                <div>

                                    <div className='mouse' onClick={scrollToSection} style={{
                                        cursor: 'pointer'
                                    }}>
                                            <span className='scroll-down'></span>
                                    </div>
                                </div>
                                <div ref={sectionRef} className="about-section">
                                    <About/>
                                </div>
                                <Work />
                            </>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
