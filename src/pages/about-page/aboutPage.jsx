import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import About from '../../newComponent/about/About';

const AboutPages = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>About Us WiseTech</title> 
                <meta name="description" content="Learn more about our team and our mission." /> 
            </Helmet>

            <div>
                <About />
            </div>
        </HelmetProvider> 
    );
}

export default AboutPages;
