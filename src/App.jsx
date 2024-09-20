// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import "./CSS/Phone.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PhoneNavbar, Navbar, Hero, About } from "./components/index";
import Work from "./components/Work.jsx";
import MailingList from "./components/MailingList.jsx";
import Footer from "./components/Footer.jsx";
import useDetectScroll from '@smakss/react-scroll-direction';
import Team from "./components/Team.jsx";
import SignUpForm from "./components/Form.jsx"
import TeamMemberForm from "./components/TeamMemberForm.jsx";
import TeamMemberDetails from "./components/TeamMemberDetails.jsx";
import Event1 from "./components/events/event1.jsx";
import EventPhone from "./components/events/event-phone.jsx";
function isPhone() {
    return window.innerWidth <= 900; // Adjust the threshold as needed
}

function App() {
    const [isMobile, setIsMobile] = useState(isPhone());
    const sectionRefs = [useRef(null), useRef(null)];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(isPhone());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            sectionRefs.forEach((sectionRef, index) => {
                if (sectionRef.current) {
                    const rect = sectionRef.current.getBoundingClientRect();
                    if (rect.bottom <= window.innerHeight && rect.bottom > 0) {
                        const nextSection = sectionRefs[index + 1];
                        if (nextSection && nextSection.current) {
                            nextSection.current.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sectionRefs]);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const scrollDirection = useDetectScroll();

    return (
        <div className="app-container">
            <BrowserRouter>
                <Routes>
                    <Route
                        path={'event'}
                        element={
                            <>
                                {isMobile ? <PhoneNavbar/> : <Navbar/>}
                                <div className=" mt-40">
                                    {isPhone() ?  <EventPhone/> : <Event1/>}
                                </div>


                            </>
                        }
                    />
                    <Route
                        path="/team-member-form"
                        element={
                            <>
                                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center hero_itemn phone-style"
                                     style={{
                                         backgroundSize: 'cover',
                                         backgroundRepeat: 'no-repeat',
                                         backgroundPosition: 'center -100px',
                                         width: '100vw'
                                     }}
                                     id="hero-element">
                                <TeamMemberForm />
                                </div>
                            </>
                        }
                    />

                    <Route
                        path="/"
                        element={
                            <>
                                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center hero_itemn phone-style"
                                     style={{
                                         backgroundImage: 'url("/assets/meow3.png")',
                                         backgroundSize: 'cover',
                                         backgroundRepeat: 'no-repeat',
                                         backgroundPosition: 'center -100px',
                                         width: '100vw'
                                     }}
                                     id="hero-element">
                                    {isMobile ? <PhoneNavbar /> : <Navbar />}
                                    <Hero />
                                </div>
                                {!isMobile && (
                                    <div>
                                        <div className='mouse' onClick={(e) => {
                                            e.stopPropagation();
                                            scrollToSection('about');
                                        }} style={{ cursor: 'pointer' }}>
                                            <span className='scroll-down'></span>
                                        </div>
                                    </div>
                                )}

                                <div id="about" ref={sectionRefs[0]} className="about-section mb-6 pb-6">
                                    <About />
                                </div>
                                <div className="aboutMargin" id="" ref={sectionRefs[1]}>
                                    <Work />
                                </div>
                                <div className="" id="joinUS">
                                    <MailingList />
                                </div>
                                <div className="" id="footer">
                                    <Footer />
                                </div>
                            </>
                        }
                    />
                    <Route
                        path="/apply"
                        element={
                            <>
                                <div style={{ position: "relative" }}>
                                    {isMobile ? <PhoneNavbar /> : <Navbar />}
                                </div>
                                <SignUpForm />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/team"
                        element={
                            <>
                                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center hero_itemn phone-style" id="hero-element">
                                    {isMobile ? <PhoneNavbar /> : <Navbar />}
                                </div>
                                <div className="mt-20 team">
                                    <Team />
                                </div>
                                <div className="" id="footer">
                                    <Footer />
                                </div>
                            </>
                        }
                    />
                    <Route
                        path="/team-member/:id"
                        element={
                            <>
                                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center hero_itemn phone-style" id="hero-element">
                                    {isMobile ? <PhoneNavbar /> : <Navbar />}
                                </div>
                                <div className="mt-20">
                                    <TeamMemberDetails />
                                </div>
                                <div className="" id="footer">
                                    <Footer />
                                </div>
                            </>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
