import React from 'react';
import './ServiceSection.css';
import serviceImg from '../../assets/images/serviceImg.png';


const ServiceSection = () => {
    return (
        <section className="service-section">
        <div className="service-content">
            <div className="service-image">
            <img src={serviceImg} alt="Person Image" />
            </div>
            <div className="service-text">
            <h3>SERVICE</h3>
            <h2>Development of sophisticated digital solutions for applications</h2>
            <p>The company offers a full range of technical, design and strategy services for mobile, web and desktop applications.</p>
            <a href="#" className="btn-explore">EXPLORE</a>
            </div>
        </div>
        </section>
    );
}

export default ServiceSection;
