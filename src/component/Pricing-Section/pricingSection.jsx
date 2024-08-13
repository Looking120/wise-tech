import React from 'react';
import './pricingSection.css'; // Assurez-vous d'avoir ce fichier CSS

const PricingSection = () => {
    return (
        <section className="pricing-section">
        <h4>PRICING</h4>
        <h2>Check Our <br />Pricing Plans</h2>
        
        <div className="pricing-grid">
            <div className="pricing-card">
            <h4 className="title">Consultation</h4>
            <h3>Free</h3>
            <p>Your efforts on digital development, instead of managing them internally.</p>
            <ul>
                <li><i className="fas fa-check-circle"></i>Speak with our consultants</li>
                <li><i className="fa-solid fa-circle-xmark icon-blur" aria-hidden="true"></i>Project Analysis</li>
                <li><i className="fa-solid fa-circle-xmark icon-blur" aria-hidden="true"></i>Production and Finalization</li>
            </ul>
            <button>Contact Us</button>
            </div>
            
            <div className="pricing-card popular">
            <div className="title-container">
                <h3>Popular</h3>
            </div>
            <h3>$1500</h3>
            <p>Provide your business with a variety of digital solutions to promote.</p>
            <ul>
                <li><i className="fas fa-check-circle"></i>Speak with our consultants</li>
                <li><i className="fas fa-check-circle"></i>Project Analysis</li>
                <li><i className="fa-solid fa-circle-xmark icon-blur" aria-hidden="true"></i>Production and Finalization</li>
            </ul>
            <button>Contact Us</button>
            </div>
            
            <div className="pricing-card">
            <header className="title-container">
                <h3>Start the project</h3>
            </header>
            <h3>$2900</h3>
            <p>Help you achieve your goals by developing your Application.</p>
            <ul>
                <li><i className="fas fa-check-circle"></i>Speak with our consultants</li>
                <li><i className="fas fa-check-circle"></i>Project Analysis</li>
                <li><i className="fas fa-check-circle"></i>Production and Finalization</li>
            </ul>
            <button aria-label="Learn more about this pricing option">Contact Us</button>
            </div>
            
        </div>
        </section>
    );
};

export default PricingSection;
