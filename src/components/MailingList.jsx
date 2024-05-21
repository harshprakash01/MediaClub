import React, {useState} from 'react';
import styled from 'styled-components';
import {ToastContainer, toast, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

// Styled component for the Signup section
const SignupSection = styled.section`
    margin-top: 3rem;
`;

// Styled component for the text inside Signup section
const SignupText = styled.div`
    text-align: center;
    margin: 0 auto 25px;
    color: #6d6d6d;
    letter-spacing: 0.5px;
    font-size: 1em;
    line-height: 1.5em;
    width: 90%;
    color: white;

    @media (max-width: 540px) {
        display: block;
    }
`;

// Styled component for the form inside Signup section
const SignupForm = styled.form`
    display: flex;
    justify-content: center;
    border-radius: 200px;

    @media (max-width: 540px) {
        display: block;
    }
`;

// Styled component for the input field
const InputField = styled.input`
    border: 2px solid #6d6d6d;
    border-radius: 3px;
    padding: 15px;
    letter-spacing: 0.5px;
    margin-right: 10px;
    color: #6d6d6d;
    transition: border 0.3s, box-shadow 0.3s;
    width: 90%;
    max-width: 300px;

    @media (max-width: 540px) {
        display: block;
        margin: 0 auto 25px;
    }

    &:focus {
        outline: none;
        border: 2px solid rgb(155, 31, 83);
        box-shadow: inset 1px 1px 2px 0 #c9c9c9;
    }
`;

// Styled component for the button
const SubmitButton = styled.button`
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    background: rgb(155, 31, 83);
    border: 2px solid rgb(155, 31, 83);
    border-radius: 3px;
    letter-spacing: 0.5px;
    padding: 0 40px;
    font-size: 16px;
    cursor: pointer;

    @media (max-width: 540px) {
        display: block;
        margin: 0 auto 50px;
        padding: 15px 40px;
    }

    &:hover {
        background: rgb(155, 31, 83);
        border-color: rgb(155, 31, 83);
    }

    &:active {
        cursor: pointer;
        background: rgb(155, 31, 80);
        border-color: rgb(155, 31, 83);
    }

    &:focus {
        outline: none;
    }
`;
const notify = (message) => toast(message);

const MailingList = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.elements.email.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        try {
            setLoading(true);
            const response = await axios.get(`https://media-club-backend-six.vercel.app/getEmail?email=${email}`);
            console.log(response.status)
            if (response.status === 300) {
                notify('⚠️ Email already exists!');
            } else if (response.status === 200) {
                notify('✅ Submitted Successfully');
            } else {
                notify('️⚠️ An error occurred. Please try again later.');
            }
        } catch (error) {
            const statusCode = error.response.status;
            if (statusCode === 300) {
                notify('⚠️ Email already exists!');
            }else{
                notify('⚠️ An error occurred. Please try again later.');
            }

        } finally {
            setLoading(false);
        }

        event.target.reset();
    };

    return (
        <section>
            <h1 className="text-center heading-font">JOIN US</h1>
            <SignupSection>
                <SignupText>
                    Give us your e-mail so we can send you our <b>Notice Mails</b>
                </SignupText>
                <SignupForm onSubmit={handleSubmit}>
                    <InputField required id="email" type="email" placeholder="Your e-mail" />
                    <SubmitButton type="submit" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </SubmitButton>
                </SignupForm>
            </SignupSection>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
        </section>
    );
};
export default MailingList;
