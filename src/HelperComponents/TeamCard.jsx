import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { LazyLoadImage } from "react-lazy-load-image-component";


const TeamCard = ({ imageSrc, altText, name, role,link }) => {
    return (
        <div className="card">
            <div className="card-img-wrapper">
                <LazyLoadImage src={imageSrc} alt={altText} />
            </div>
            <a href={link} className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <div className="card-content-wrapper">
                <div className="card-content">
                    <h3>{name}</h3>
                    <p>{role}</p>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
