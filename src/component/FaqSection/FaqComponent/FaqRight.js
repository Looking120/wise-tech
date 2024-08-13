import React from 'react';
import FaqItem from './FaqItem'; 

const FaqRight = () => {
    const faqItems = [
        {
            question: 'WiseTech is a company',
            answer: 'Wise Tech offers a full range of services including technical skills design and in-depth business understanding. We specialize in creating web and mobile applications, and we also offer other services such as custom software development, technology project management, and more.'
        },
        {
            question: 'Hire to outsource your knowledge levels',
            answer: 'We provide businesses with the knowledge and expertise needed to successfully navigate the complexities of digital transformation.'
        },
        {
            question: 'Marketing efforts',
            answer: 'We offer comprehensive marketing strategies to help businesses grow and achieve their goals.'
        },
        {
            question: 'Can provide your needs',
            answer: 'Our team is equipped to meet the diverse needs of our clients, delivering solutions that drive results.'
        }
    ];

    return (
        <div className="faq-right-box">
            <div className="faq-right">
                {faqItems.map((item, index) => (
                    <FaqItem 
                        key={index} 
                        question={item.question} 
                        answer={item.answer} 
                    />
                ))}
            </div>
        </div>
    );
};

export default FaqRight;
