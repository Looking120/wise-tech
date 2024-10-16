import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'; 
import Portfolio from '../../newComponent/portfolio/potrtfolio';

const PortfolioPage = () => {
    return (
        <HelmetProvider> 
            <Helmet>
                <title>Skills - WiseTEch</title>
                <meta name="description" content="Explore the skills and expertise we offer." /> 
            </Helmet>
            <div>
                <Portfolio />
            </div>
        </HelmetProvider> 
    );
}

export default PortfolioPage ;
