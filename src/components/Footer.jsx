// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
const isPhone = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /android/i.test(userAgent) || /iPhone|iPod/.test(userAgent);
}
const FooterContainer = styled.footer`
    margin-top: 30px;
    background-size: cover; /* Ensure background image covers the entire container */
    padding: 20px 0;
    color: #fff;
    text-align: center;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;

    /* Media query for mobile devices */
    @media (max-width: 768px) {
        padding: 20px 15px;
        border-radius: 0; /* Remove border radius for small screens */
    }
`;

const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1024px;
    margin: 0 auto;
    padding: 20px 50px;

    /* Media query for mobile devices */
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        padding: 10px 15px;
    }
`;

const LeftSection = styled.div`
    flex: 1;
    text-align: left;

    /* Media query for mobile devices */
    @media (max-width: 768px) {
        text-align: center;
        margin-bottom: 15px;
    }
`;

const RightSection = styled.div`
    flex-shrink: 0;
    text-align: right;

    /* Media query for mobile devices */
    @media (max-width: 768px) {
        text-align: center;
    }
`;

const FooterTitle = styled.h2`
    font-family: 'Yeseva One';
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 600;

    /* Media query for mobile devices */
    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const FooterDescription = styled.p`
    margin-bottom: 1.5rem;

    /* Media query for mobile devices */
    @media (max-width: 768px) {
        margin-bottom: 1rem;
    }
`;

const FooterCopy = styled.p`
    font-size: 0.75rem;
    color: #fbf9f9;
    text-align: center;
    padding: 0 15px;

    /* Media query for mobile devices */
    @media (max-width: 768px) {
        font-size: 0.9rem;
        padding: 0 10px;
    }
`;

const ContactSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    /* Media query for mobile devices */
    @media (max-width: 768px) {
        align-items: center;
    }
`;

const ContactInfo = styled.p`
    font-size: 1rem;
    margin-right: 12px;

    /* Media query for mobile devices */
    @media (max-width: 768px) {
        margin-right: 0;
        font-size: 0.9rem;
    }
`;

const ContactNumber = styled.p`
    font-size: 1rem;

    /* Media query for mobile devices */
    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <LeftSection>
                    <FooterTitle>Nerist Media Club</FooterTitle>
                    <FooterDescription>
                        Capturing Moments, Crafting Stories.
                    </FooterDescription>
                </LeftSection>
                <RightSection>
                    <ContactSection>
                        <ContactInfo>
                            Uddipan Bhattacharjee <br />
                            <a href="mailto:uddipan710@gmail.com">E-Mail</a><br />
                            +91 8822078464
                        </ContactInfo>
                    </ContactSection>
                </RightSection>
            </FooterContent>
            <FooterCopy>&#169;Nerist Media Club 2024.
                {isPhone()?(<br/>):('')}All rights reserved <br />
                Made with ❤️ by Harsh
            </FooterCopy>
        </FooterContainer>
    );
};

export default Footer;
