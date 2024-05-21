// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Link} from "react-router-dom";

const About = () => {
    return (
        <>
            <div className="about-section" id="about">
                <h1 className=" text-center heading-font">
                    About Us
                </h1>
                <p className=" p-font text-center mb-4">
                    The Nerist Media Club stands as a vibrant hub pulsating with creativity and innovation. With a
                    mission to amplify voices, spark conversations, and foster a sense of community, it serves as a
                    platform for budding journalists, photographers, graphic designers, and multimedia enthusiasts
                    alike. Through a tapestry of articles, photo essays, videos, and podcasts, the club captures the
                    essence of campus life, delves into pertinent issues, and celebrates the diverse talents within the
                    North-Eastern Regional Institute of Science and Technology (NERIST) community. Whether it's covering
                    campus events, shedding light on social causes, or spotlighting student achievements, the Nerist
                    Media Club embodies the spirit of storytelling, collaboration, and expression, weaving together
                    narratives that resonate far beyond the campus walls.
                </p>
                <Link to={"/team"}>
                <button
                    className={"css-button-sliding-to-left--green pt-2 mt-3"}
                    style={{
                        width: "200px", // Adjust width as needed
                        height: "60px", // Adjust height as needed
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "0 auto" // Centers the button horizontally
                    }}
                >
                    OUR TEAM
                </button></Link>

            </div>
        </>
    );
};

export default About;