import React from 'react';

const BlogCard = ({ imgSrc, title, description, date }) => {
    return (
        <div className="blog-card">
            <a href={imgSrc} data-fancybox="gallery" data-caption={title}>
                <img src={imgSrc} alt="Article Image" />
            </a>
            <h3>{title}</h3>
            <p>{description}</p>
            <span>{date}</span>
        </div>
    );
};

export default BlogCard;
