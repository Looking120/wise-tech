import React from 'react';
import './HowWeWork.css';

const HowWeWork = () => {
    return (
        <section className="how-we-work">
            <h3>HOW WE WORK</h3>
            <div className="how-we-work-content">
                <div className="text-section">
                    <h2>Improve the Visual Appeal of Your IT Projects</h2>
                    <p>Technical Skills: Expertise in developing mobile, web and desktop applications, with mastery of modern technologies.</p>
                    <p>Design and Business Understanding: Creating intuitive designs and aligning technology solutions with clients' business objectives.</p>
                    <a href="#" className="read-more">Read More</a>
                </div>
                <div className="steps-section">
                    <Step number="1" text="A complete offer for the development of mobile, web and desktop applications." />
                    <Step number="2" text="Technical skills, innovative design and business expertise for the development of mobile, web and desktop applications." />
                    <Step number="3" text="We develop mobile, web and desktop applications to meet your technological needs." />
                </div>
            </div>
        </section>
    );
};

const Step = ({ number, text }) => {
    return (
        <div className="step">
            <h1>{number}</h1>
            <p>{text}</p>
        </div>
    );
};

export default HowWeWork;
