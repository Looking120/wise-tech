import React from 'react';
import './CtaSection.css';
import img1Img from '../../assets/images/imgBlog/image_2.png';

const CtaSection = () => {
    return (
        <section className="cta-section">
        <div className="cta-content">
            <h1>We're Help <br />To Build Your <br /> Dream Project</h1>
            <p>Wisetech is a company you hire to outsource your digital <br /> development efforts, instead of managing them in-house.</p>
        </div>
        <div className="cta-btn">
            <button>Contact Us</button>
        </div>
        <div className="cta-image">
            <img src={img1Img} />
        </div>
        </section>
    );
};

export default CtaSection;
