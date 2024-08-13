import React from 'react';
import './ContactSection.css'; 
import CommentImg from '../../assets/images/Comment.jpg'

const ContactSection = () => {
    return (
        <section className="contact-section">
            <div className="contact-bg">
                <img src={CommentImg} alt="Contact Background" className="background-img" />
                <div className="contact-form">
                    <h2>Get In Touch</h2>
                    <form>
                        <input type="email" placeholder="Your email" />
                        <select className="contact-select">
                            <option value="" disabled selected>Select Subject</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                        <textarea placeholder="Message"></textarea>
                        <button type="submit">SUBMIT NOW</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
