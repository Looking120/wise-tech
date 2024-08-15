import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'; 
import Service from '../../newComponent/service/Service';

const ServicePage = () => {
    return (
        <HelmetProvider> 
            <Helmet>
                <title>Service WiseTEch</title> 
                <meta name="description" content="Explore the services we offer to help you succeed." /> 
            </Helmet>

            <div>
                <Service />
            </div>
        </HelmetProvider> 
    );
}

export default ServicePage;
