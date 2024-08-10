import React from 'react';
import './Portfolio.css'; 
import img1 from '../../assets/images/Portfolio/1.jpeg';
import img2 from '../../assets/images/Portfolio/8.jpeg';
import img3 from '../../assets/images/Portfolio/3.jpeg';
import img4 from '../../assets/images/Portfolio/4.jpeg';
import img5 from '../../assets/images/Portfolio/5.jpeg';
import img6 from '../../assets/images/Portfolio/6.jpeg';
import img7 from '../../assets/images/Portfolio/7.jpeg';
import img8 from '../../assets/images/Portfolio/1.jpeg';


const PortfolioFilter = () => {
    return (
        <div className="portfolio-filter">
            <a href="#" className="filter active">Show All</a>
            <a href="#" className="filter">Web App</a>
            <a href="#" className="filter">Mobile App</a>
            <a href="#" className="filter">Desktop App</a>
        </div>
    );
};

const GalleryItem = ({ imgSrc, label }) => {
    return (
        <div className="gallery-item">
            <a data-fancybox="gallery" href={imgSrc}>
                <img src={imgSrc} alt={label} />
            </a>
            <span className="label">{label}</span>
        </div>
    );
};

const PortfolioGallery = () => {
    const galleryItems = [
        { imgSrc: img1, label: 'Dashboard UI' },
        { imgSrc: img2, label: 'Mobile App' },
        { imgSrc: img3, label: 'Work Media' },
        { imgSrc: img4, label: 'User App' },
        { imgSrc: img5, label: 'User App' },
        { imgSrc: img6, label: 'User App' },
        { imgSrc: img7, label: 'User App' },
        { imgSrc: img8, label: 'User App' },
    ];

    return (
        <div className="portfolio-gallery">
            {galleryItems.map((item, index) => (
                <GalleryItem key={index} imgSrc={item.imgSrc} label={item.label} />
            ))}
        </div>
    );
};

const PortfolioSection = () => {
    return (
        <section className="portfolio-section">
            <div className="portfolio-header">
                <h4>PORTFOLIO</h4>
                <h2>Latest Work</h2>
                <PortfolioFilter />
            </div>
            <PortfolioGallery />
            <div className="portfolio-footer">
                <a href="#" className="btn-explore-more">EXPLORE MORE</a>
            </div>
        </section>
    );
};

const PortfolioWrapper = () => {
    return (
        <section className="portfolio-wrapper">
            <PortfolioSection />
        </section>
    );
};

export default PortfolioWrapper;
