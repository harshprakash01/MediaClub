// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    margin-top: 30px;
    background-image: image("/assets/meowbg.png"); /* Semi-transparent background */
    filter: 'invert(100deg)';
    padding: 20px 0;
    color: #fff;
    text-align: center;
    border-top-left-radius: 40px; /* Rounded top left corner */
    border-top-right-radius: 40px; /* Rounded top right corner */
`;

const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start; /* Align items at the top */
    max-width: 1024px;
    margin: 0 auto;
    padding: 20px 50px; /* Adjusted padding */
`;

const LeftSection = styled.div`
    flex: 1; /* Take up remaining space */
    text-align: left;
`;

const RightSection = styled.div`
    flex-shrink: 0; /* Don't allow content to shrink */
    text-align: right;
`;

const FooterTitle = styled.h2`
    font-family: Yeseva_One;
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
`;

const FooterDescription = styled.p`
    margin-bottom: 1.5rem;
`;

const FooterCopy = styled.p`
    font-size: 0.75rem;
    color: #fbf9f9;
    text-align: center;
`;

const ContactSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ContactTitle = styled.h3`
    margin-top: 1rem;
    font-size: 1.2rem;
    margin-bottom: 5px;
`;

const ContactInfo = styled.p`
    font-size: 1rem;
    margin-right: 12px;
`;

const ContactNumber = styled.p`
    font-size: 1rem;
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
                        <ContactInfo>Uddipan Bhattacharjee <br/>
                            <center><a
                                href={"mailto:mediaclub@nerist.ac.in"}>E-mail </a></center>
                            <center>+918822078464</center>
                        </ContactInfo>

                    </ContactSection>
                </RightSection>
            </FooterContent>
            <FooterCopy>&#169; 2024 Nerist Media Club. All rights reserved <br/>
                Made with ❤️ by harsh
            </FooterCopy>
        </FooterContainer>
    );
};

export default Footer;
