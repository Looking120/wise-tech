import React from 'react';
import BlogCard from './BlogCard';
import './BlogSection.css'; 
import imageImg1 from '../../assets/images/imgBlog/image1.jpg';
import imageImg2 from '../../assets/images/imgBlog/image2.jpg';
import imageImg3 from '../../assets/images/imgBlog/image3.jpg';
import imageImg4 from '../../assets/images/imgBlog/image4.jpg';

const BlogSection = () => {
    const blogPosts = [
        {
            imgSrc: imageImg1,
            title: 'Stories',
            description: 'WiseTech is a company you hire to outsource',
            date: '5 Nov, 2023'
        },
        {
            imgSrc: imageImg2,
            title: 'Programmers',
            description: 'Outsource your efforts to us digitally',
            date: '29 Oct, 2023'
        },
        {
            imgSrc: imageImg3,
            title: 'Programmers',
            description: 'Outsource your efforts to us digitally',
            date: '29 Oct, 2023'
        },
        {
            imgSrc: imageImg4,
            title: 'C,O',
            description: 'Your ideas with a variety of digital',
            date: '21 Oct, 2023'
        }
    ];

    return (
        <section className="blog-section">
            <h2 className="blog-title">Our Blog</h2>
            <h2 className="subtitle-title">
                Latest Blog <br />
                Articles
            </h2>
            <button className="discover-all-btn">Discover All</button>
            <div className="blog-container">
                {blogPosts.map((post, index) => (
                    <BlogCard
                        key={index}
                        imgSrc={post.imgSrc}
                        title={post.title}
                        description={post.description}
                        date={post.date}
                    />
                ))}
            </div>
        </section>
    );
};

export default BlogSection;
