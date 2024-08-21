import React from 'react';
import MainHeader from '../../component/header/mainHeader/mainHeader';
import AboutUs from './aboutComponent/AboutHeader';
import TeamSection from './aboutComponent/TeamSection';
import TeamProfiles from './aboutComponent/TeamProfiles';
import TestimonialsSection from './aboutComponent/TestimonialsSection ';

const About = () => {
  return (
    <>
        <header className="header">
            <MainHeader />
        </header>
        <AboutUs />
        <TeamSection />
        <TeamProfiles />
        <TestimonialsSection />
    </>
  );
};

export default About;
