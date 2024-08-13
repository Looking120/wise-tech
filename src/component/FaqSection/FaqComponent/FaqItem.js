import React, { useState } from 'react';
import arrowIcon from '../../../assets/images/imgIcon/arrow-icon.png'; 

const FaqItem = ({ question, answer }) => {
    console.log(question, answer);
    const [isOpen, setIsOpen] = useState(false);

    const toggleFaq = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="faq-item">
            <input 
                type="checkbox" 
                checked={isOpen} 
                onChange={toggleFaq} 
                id={`faq-${question}`}
                style={{ display: 'none' }} 
            />
            <label htmlFor={`faq-${question}`} onClick={toggleFaq}>
                {question}
                <span 
                    className="arrow" 
                    style={{ 
                        backgroundImage: `url(${arrowIcon})`, 
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: 'center center', 
                        backgroundSize: 'contain'
                    }}
                ></span>

            </label>
            {isOpen && (
                <div className="faq-content">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

export default FaqItem;



