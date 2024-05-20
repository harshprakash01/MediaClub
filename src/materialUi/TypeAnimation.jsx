import React, { useState, useEffect } from 'react';
import '../CSS/Typeanimation.css';

const TypeAnimation = ({ texts, typingSpeed, deletingSpeed, delay }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            const currentText = texts[currentTextIndex];
            const currentChar = currentText.charAt(charIndex);

            if (isDeleting) {
                if (charIndex === 0) {
                    setIsDeleting(false);
                    setCurrentTextIndex((prev) => (prev + 1) % texts.length);
                } else {
                    setDisplayedText((prev) => prev.slice(0, -1));
                    setCharIndex((prev) => prev - 1);
                }
            } else {
                if (charIndex === currentText.length) {
                    setTimeout(() => setIsDeleting(true), delay);
                } else {
                    setDisplayedText((prev) => prev + currentChar);
                    setCharIndex((prev) => prev + 1);
                }
            }
        };

        const timeoutId = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeoutId);
    }, [charIndex, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, delay]);

    return (
        <div className="type-animation">
            <h1>{displayedText}</h1>
        </div>
    );
};

export default TypeAnimation;
