import React from 'react';
import './BannerSection.css'; 
import mainImg from '../../assets/images/img/main-image.png';
import page1Img from '../../assets/images/img/Page 1.png';
import page2Img from '../../assets/images/img/Page 2.png';
import page3Img from '../../assets/images/img/Page 3.png';
import page4Img from '../../assets/images/img/Page 4.png';
import page5Img from '../../assets/images/img/Page 5.png';
import page6Img from '../../assets/images/img/Page 6.png';
import page7Img from '../../assets/images/img/Page 7.png';
import page8Img from '../../assets/images/img/Page 8.png';
import pageImg from '../../assets/images/img/Quote Page.png';
import titleImg from '../../assets/images/img/Title Page.png';
import imageImg from '../../assets/images/img/1.png';



const BannerSection = () => {
    return (
        <div className="banner-section">
            <div className="banner-image">
                <img src={imageImg} alt="Excited Person" />
            </div>
            <div className="image-main">
                <img src={mainImg} alt="Main Image" />
            </div>
            <div className="center-images">
                <img src={titleImg} alt="title Image" />
                <img src={page1Img} alt="Center Image 1" />
                <img src={page2Img} alt="Center Image 2" />
                <img src={page3Img} alt="Center Image 3" />
                <img src={page4Img} alt="Center Image 4" />
                <img src={page5Img} alt="Center Image 5" />
                <img src={page6Img} alt="Center Image 6" />
                <img src={page7Img} alt="Center Image 7" />
                <img src={page8Img} alt="Center Image 9" />
                <img src={pageImg } alt="Center Image 11" />
            </div>
            <div className="banner-content">
                <h4>GET STARTED</h4>
                <h2>We Help Companies <br /> Move Faster</h2>
                <a href="#" className="btn-contact-us">Contact Us</a>
            </div>
        </div>
    );
    };

export default BannerSection;
