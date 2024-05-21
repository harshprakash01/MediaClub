import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    margin-top: 30px;
    background: rgba(17, 1, 40, 0.5); /* Semi-transparent background */
    backdrop-filter: blur(10px); /* Frosted glass effect */
    -webkit-backdrop-filter: blur(10px); /* For Safari */
    padding: 20px 0;
    color: #fff;
    text-align: center;
    border-top-left-radius: 40px; /* Rounded top left corner */
    border-top-right-radius: 40px; /* Rounded top right corner */
`;

const FooterContent = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding: 20px;
`;

const FooterTitle = styled.h2`
    font-family: Yeseva_One;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
`;

const FooterDescription = styled.p`
    margin-bottom: 1.5rem;
`;

const FooterCopy = styled.p`
    font-size: 0.75rem;
    color: #fbf9f9;
`;
const Links = styled.a`
`

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterTitle>Nerist Media Club</FooterTitle>
                <FooterDescription>
                    Capturing Moments, Crafting Stories.
                </FooterDescription>

                <FooterCopy>&#169; 2024 Nerist Media Club. All rights reserved</FooterCopy>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;
