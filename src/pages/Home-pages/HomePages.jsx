import React from 'react';
import Header from '../../component/header/header';
import './HomePages.css';
import About from '../../component/section-About/About';
import HowWeWork from '../../component/section-Work/HowWeWork';
import VideoReel from '../../component/section-VideoReel/VideoReel';
import FeaturesSection from '../../component/section-Feature/FeaturesSection';
import ServiceSection from '../../component/section-Service/ServiceSection';
import OptimizeSection from '../../component/optimizeSection/OptimizeSection';
import PortfolioWrapper from '../../component/section-Portfolio/Portfolio';
import BannerSection from '../../component/BannerSection/BannerSection';


const HomePages = () => {
    return (
        <>
            <Header />
            <div className="container">
                <About />
                <HowWeWork />
                <VideoReel />
                <FeaturesSection />
                <ServiceSection />
                <OptimizeSection />
            </div>

            <div className="contain">
                <PortfolioWrapper />
                <BannerSection />
            </div>
        </>
    );
}

export default HomePages;