import React from 'react';
import './OptimizeSection.css'; 
import designIcon from '../../assets/images/design-icon.png';
import developmentIcon from '../../assets/images/development-icon.png';
import marketingIcon from '../../assets/images/marketing-icon.png';

const OptimizeSection = () => {
    return (
        <section className="optimize-section">
        <h3>SERVICE</h3>
        <h2>How our company optimizes <br /> your applications</h2>
        <div className="optimize-cards">
            <div className="optimize-card">
            <div className="card-icon">
                <img src={designIcon} alt="Design Icon" />
            </div>
            <h4>Design</h4>
            <p>
                The company offers a full range of mobile, web, and desktop 
                application development services, with expertise in user interface 
                technologies such as React, Vue.js, Angular, and more.
            </p>
            <a href="#" className="learn-more">Learn More</a>
            </div>
            <div className="optimize-card">
            <div className="card-icon">
                <img src={developmentIcon} alt="Development Icon" />
            </div>
            <h4>Development</h4>
            <p>
                Complete development: creation of mobile, web, and desktop 
                applications with C#, .NET, MVC.NET, API, back-end services, 
                careful design, and business expertise.
            </p>
            <a href="#" className="learn-more">Discover More</a>
            </div>
            <div className="optimize-card">
            <div className="card-icon">
                <img src={marketingIcon} alt="Marketing Icon" />
            </div>
            <h4>Marketing</h4>
            <p>
                Skills in mobile, web, and desktop development, 
                with comprehensive server 
                hosting and maintenance services.
            </p>
            <a href="#" className="learn-more" style={{ marginTop: '20px' }}>Explore Now</a>
            </div>
        </div>
        </section>
    );
};

export default OptimizeSection;
