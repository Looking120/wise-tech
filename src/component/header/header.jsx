import React from 'react';
import './header.css';
import image1 from '../../assets/images/image1.png';
import MainHeader from './mainHeader/mainHeader';




const Header = () => {
    return (
        <header className="header">
        <MainHeader />

            <div className="hero-container">
                <section className="hero">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1>WISE TECHNOLOGY</h1>
                            <h2>Design<br />Development<br />Success</h2>
                            <p>Wise Tech offers a full range of services including technical skills design and in-depth 
                                business understanding. We specialize in creating web and mobile applications, 
                                and we also offer other services such as custom software development, technology project 
                                management, and more</p>
                        </div>

                        <div className="hero-buttons">
                            <a href="#" className="btn-primary">HOW WE WORK</a>
                            <a href="#" className="btn-secondary">Contact Us</a>
                        </div>
                    </div>
                    <div className="hero-images">
                    <img src={image1} alt="Hero" />
                    </div>
                </section>
                <section className="line"></section>
            </div>
        </header>
    );
}

export default Header;
