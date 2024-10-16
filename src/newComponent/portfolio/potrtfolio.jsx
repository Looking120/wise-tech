import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../service/LittleFashion.css'; // Your CSS file
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'slick-carousel';
import imgService1 from '../../assets/1.png';
import imgService2 from '../../assets/2.png';
import imgService3 from '../../assets/3.png';


import MainHeader from '../../component/header/mainHeader/mainHeader';
import Footer from '../../component/FooterSection/Footer';

const LittleFashion = () => {
    useEffect(() => {
        const $slideshow = $('.slick-slideshow');

        // Delay initialization to ensure elements are available
        const timer = setTimeout(() => {
            if (!$slideshow.hasClass('slick-initialized')) { // Prevent double initialization
                console.log("Initializing Slick Slider");
                console.log($slideshow[0]); // Check if it's present
                $slideshow.slick({
                    dots: true,
                    infinite: true,
                    speed: 500,
                    fade: true,
                    cssEase: 'linear',
                });
            }
        }, 100); // Delay of 100 milliseconds

        return () => {
            clearTimeout(timer);
            if ($slideshow.hasClass('slick-initialized')) { // Check if initialized before unslicking
                $slideshow.slick('unslick'); // Clean up on component unmount
            }
        };
    }, []);
    return (
        <div>
            <header className="header">
                <MainHeader />
            </header>

            <section className="slick-slideshow">
                <div className="slick-custom">
                    <img src={imgService1} className="img-fluid" alt="Cool Fashion"/>
                    <div className="slick-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-10">
                                    <h1 className="slick-title">Web App</h1>
                                    <p className="lead text-white mt-lg-3 mb-lg-5">Little fashion template comes with total 8 HTML pages provided by Tooplate website.</p>
                                    <a href="about.html" className="btn custom-btn">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slick-custom">
                    <img src={imgService2} className="img-fluid" alt="New Design"/>
                    <div className="slick-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-10">
                                    <h1 className="slick-title">Mobile App</h1>
                                    <p className="lead text-white mt-lg-3 mb-lg-5">Please share this Little Fashion template to your friends. Thank you for supporting us.</p>
                                    <a href="product.html" className="btn custom-btn">Explore</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slick-custom">
                    <img src={imgService3} className="img-fluid" alt="Talk to us"/>
                    <div className="slick-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-10">
                                    <h1 className="slick-title">Desktop App</h1>
                                    <p className="lead text-white mt-lg-3 mb-lg-5">Tooplate is one of the best HTML CSS template websites for everyone.</p>
                                    <a href="contact.html" className="btn custom-btn">Work with us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           <Footer />
        </div>
    );
};

export default LittleFashion;
