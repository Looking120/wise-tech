import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'; 
import Skills from '../../newComponent/skills/skills';

const SkillsPage = () => {
    return (
        <HelmetProvider> 
            <Helmet>
                <title>Skills - WiseTEch</title>
                <meta name="description" content="Explore the skills and expertise we offer." /> 
            </Helmet>
            <div>
                <Skills />
            </div>
        </HelmetProvider> 
    );
}

export default SkillsPage;
