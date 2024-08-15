import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'; 
import Blog from '../../newComponent/blog/blog';

const BlogPages = () => {
    return (
        <HelmetProvider> 
            <Helmet>
                <title>Blog WisTech</title>
                <meta name="description" content="Read our latest blog posts and updates." /> 
            </Helmet>

            <div>
                <Blog />
            </div>
        </HelmetProvider>
    );
}

export default BlogPages;
