import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'; 
import Contact from '../../newComponent/contact/Contact';

const ContactPage = () => {
    return (
        <HelmetProvider> 
            <Helmet>
                <title>Contact Us WiseTEch </title> 
                <meta name="description" content="Get in touch with us for more information or inquiries." />
            </Helmet>

            <div>
                <Contact />
            </div>
        </HelmetProvider> 
    );
}

export default ContactPage;
