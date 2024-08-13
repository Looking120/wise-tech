import React from 'react';
import './FaqSection.css';
import FaqLeft from './FaqComponent/FaqLeft';
import FaqRight from './FaqComponent/FaqRight';

const FaqSection = () => {
    return (
        <section className="faq-section">
            <FaqLeft />
            <FaqRight />
        </section>
    );
};

export default FaqSection;
