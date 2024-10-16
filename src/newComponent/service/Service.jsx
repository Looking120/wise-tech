import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LittleFashion.css'; // Your CSS file
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'slick-carousel';
import imgService1 from '../../assets/1.png';
import imgService2 from '../../assets/2.png';
import imgService3 from '../../assets/3.png';
import imgService4 from '../../assets/11.png';
import imgService5 from '../../assets/22.png';
import imgService6 from '../../assets/13.jpg';
import imgService7 from '../../assets/10.jpg';
import imgService8 from '../../assets/4.jpg';
import imgService9 from '../../assets/9.jpg';
import imgService10 from '../../assets/13.jpg';
import imgService11 from '../../assets/12.jpg';

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

            <section className="about section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="mb-5">Technology<span> That the</span> Company uses</h2>
                        </div>

                        <div className="col-lg-2 col-12 mt-auto mb-auto">
                            <ul className="nav nav-pills mb-5 mx-auto justify-content-center align-items-center" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">JavaScript (React) </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-youtube-tab" data-bs-toggle="pill" data-bs-target="#pills-youtube" type="button" role="tab" aria-controls="pills-youtube" aria-selected="true">TypeScript, Angular</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-skill-tab" data-bs-toggle="pill" data-bs-target="#pills-skill" type="button" role="tab" aria-controls="pills-skill" aria-selected="false">.NET , C#</button>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-10 col-12">
                            <div className="tab-content mt-2" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div className="row">
                                        <div className="col-lg-7 col-12">
                                            <img src={imgService6} className="img-fluid" alt="js end react img"/>
                                        </div>
                                        <div className="col-lg-5 col-12">
                                            <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                                                <h4 className="mb-3">Why choose <span>React for </span> <br /> your <span>projects?</span></h4>
                                                <p>- Rapid development: Reusable components for better efficiency.
                                                    <br />- High performance: Thanks to the Virtual DOM, the user experience remains fluid.
                                                </p>
                                                <p> Rich ecosystem: Tools like Redux and React Router for a scalable application.
                                                    - Improved SEO: Better SEO thanks to server-side rendering.
                                                    - Large community: Constant support and regular updates.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="pills-youtube" role="tabpanel" aria-labelledby="pills-youtube-tab">
                                    <div className="row">
                                        <div className="col-lg-7 col-12">
                                            <div className="ratio ratio-16x9">
                                            <img src={imgService5} className="img-fluid" alt="js end react img"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-12">
                                            <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                                            <h4 className="mb-3">Why <span>TypeScript and Angulare </span></h4>
                                            <p> TypeScript: Static typing for fewer bugs and more readable code.
                                                Angular: Powerful framework with modular components and a clear architecture.
                                                Performance Fast applications with server-side rendering.
                                                -Maintenance: Structured and easy-to-update code.
                                            </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="pills-skill" role="tabpanel" aria-labelledby="pills-skill-tab">
                                    <div className="row">
                                        <div className="col-lg-7 col-12">
                                        <img src={imgService4} className="img-fluid" alt="js end react img"/>
                                        </div>
                                        <div className="col-lg-5 col-12">
                                            <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                                            <h4 className="mb-3">Why choose <span>C# and .NET </span> <br /> your <span>projects?</span></h4>
                                                <p> - C#: Robust and secure language with clear syntax.
                                                    - .NET: Powerful framework for high-performance and scalable applications.
                                                    - Cross-platform: Application development on Windows, Linux and macOS.
                                                    - Rich ecosystem: Wide library support to accelerate development.
                                                    C# and .NET allow you to create fast, secure and cross-platform applications.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="featured-products section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="mb-5">other technology</h2>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12 mb-4">
                            <div className="product-card">
                                <img src={imgService9} className="img-fluid" alt="React-Native" />
                                <p className="product-price"></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12 mb-4">
                            <div className="product-card">
                                <img src={imgService11} className="img-fluid" alt="Product 1" />  
                                <p className="product-price"></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12 mb-4">
                            <div className="product-card">
                            <img src={imgService7} className="img-fluid" alt="Product 1" />
                                <p className="product-price"></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12 mb-4">
                            <div className="product-card">
                                <img src={imgService8} className="img-fluid" alt="Product 1" />
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
