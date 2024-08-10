import React from 'react';
import './About.css'; 
import AboutImag from '../../assets/images/image-about.png';

const About = () => {
    return (
        <section className="about">
        <div className="about-content">
            <div className="about-image">
            <img src={AboutImag} alt="Hero" />
            </div>
            <div className="about-text">
            <h3>ABOUT</h3>
            <h2>Application creation and maintenance company</h2>
            <p>Your Trusted Technology Partner</p>
            <p>
                We integrate as an extension of your team for lasting partnerships. We create customized, 
                high-performance web, mobile, and desktop applications with a focus on innovation, 
                technical expertise, and ongoing support. Together, let's transform your ideas into technological realities.
            </p>
            <div className="hero-buttons">
                <a href="#" className="btn-about-us">ABOUT US</a>
            </div>
            </div>
        </div>
        <div className="about-stats">
            <div className="stat-item">
            <h4>42%</h4>
            <p>Years of experience</p>
            </div>
            <div className="stat-item" style={{ backgroundColor: '#F3D1BF' }}>
            <h4>7+</h4>
            <p>Agency members</p>
            </div>
            <div className="stat-item">
            <h4>55</h4>
            <p>Projects complete</p>
            </div>
        </div>
        </section>
    );
};

export default About;
