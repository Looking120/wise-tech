import React from 'react';
import Header from '../../component/header/header';
import './HomePages.css';
import About from '../../component/section-About/About';
import HowWeWork from '../../component/section-Work/HowWeWork';
import VideoReel from '../../component/section-VideoReel/VideoReel';
import FeaturesSection from '../../component/section-Feature/FeaturesSection';
import ServiceSection from '../../component/section-Service/ServiceSection';
import OptimizeSection from '../../component/optimizeSection/OptimizeSection';
import BannerSection from '../../component/BannerSection/BannerSection';
import DepartmentsSection from '../../component/departments-Section/DepartmentsSection';
import TeamSection from '../../component/Team-Section/TeamSection';
import TestimonialsSection from '../../component/testimonials-Section/TestimonialsSection';
import PricingSection from '../../component/Pricing-Section/pricingSection';
import FaqSection from '../../component/FaqSection/FaqSection';
import BlogSection from '../../component/BlogSection/BlogSection';
import SearchHeader from '../../component/SearchHeader/SearchHeader';
import ContactSection from '../../component/ContactSection/ContactSection';
import ContactInfoSection from '../../component/ContactInfoSection/ContactInfoSection';
import CtaSection from '../../component/CtaSection/CtaSection';
import Footer from '../../component/FooterSection/Footer';
import Portfolio from '../../component/section-Portfolio/Portfolio';


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
                <Portfolio />
                <BannerSection />
                <DepartmentsSection />
                <TeamSection />
            </div>
            <div>
                <TestimonialsSection />
                <PricingSection />
                <FaqSection />
                <BlogSection />
                <SearchHeader />
                <ContactSection />
                <ContactInfoSection />
                <CtaSection />
                <Footer />
            </div>
        </>
    );
}

export default HomePages;