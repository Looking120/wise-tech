import React from 'react';
import './FeaturesSection.css';
import featuresImage from '../../assets/images/features-image.png';
import proIconImg from '../../assets/images/ProIcon.png';
import collaborationSvg from '../../assets/images/collaboration.svg';


const FeaturesSection = () => {
    return (
        <section className="features-section">
        <div className="features-content">
            <div className="features-text">
            <h3>FEATURES</h3>
            <h2>Reinvent your digital presence with our solutions</h2>
            <p>Comprehensive offering including technical skills, creative design and in-depth understanding of business needs for mobile, web and desktop application development.</p>
            <ul>
                <li>Varied technical skills adapted to the development of mobile, web and desktop applications</li>
                <li>In-depth analysis of needs to design innovative mobile, web and desktop applications</li>
                <li>Strategic partner for the development of mobile, web and desktop applications over the long term.</li>
            </ul>
            </div>
            <div className="features-image">
            <img src={featuresImage} alt="features image" className="main-image" />
            </div>
        </div>

        <div className="features-cards">
            <div className="cards small-card">
            <h4>FEATURES</h4>
            <p>Collaborate closely with the merchant's team for long-term mobile, web and desktop IT solutions</p>
            <span className="cards-links"><a href="/">Read more</a></span>
            </div>
            <div className="card-group">
            <div className="card large-card">
                <div className="card-icon">
                <img src={proIconImg} alt="Accessibility Icon" />
                </div>
                <h4>Professional</h4>
                <p>A full range of services including technical skills and design for application development</p>
            </div>

            <div className="card large">
                <div className="card-icon">
                <img src={collaborationSvg} alt="Accessibility Icon" />
                </div>
                <div className="small-text">
                <h4>Collaboration</h4>
                <p className="samll-text">Collaborate closely with the merchant's team for long-term mobile, web and desktop IT solutions</p>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default FeaturesSection;
