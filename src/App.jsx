import './CSS/background.scss';
import { useState, useEffect } from "react";
import "./App.css";
import "./CSS/Phone.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PhoneNavbar, Navbar, Hero, About } from "./components/index";

function isPhone() {
    return window.innerWidth <= 600; // Adjust the threshold as needed
}

function App() {
    const [isMobile, setIsMobile] = useState(isPhone());

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(isPhone());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="app-container">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center hero_item">
                                    {isMobile ? <PhoneNavbar /> : <Navbar />}
                                    <Hero />
                                </div>
                                <div className="about-section">
                                    <About />
                                </div>
                            </>
                        }
                    />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
