import React from 'react';
import FooterSection from './FooterSection'; 
import facebookIcon from '../../assets/images/imgIcon/facebook.svg'; 
import telegramIcon from '../../assets/images/imgIcon/instagram.svg'; 
import instagramIcon from '../../assets/images/imgIcon/telegram.svg'; 
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
            <div className="footer-logo">
                <h2 style={{color: "#082Eb8"}}><span style={{color: "#ff0000"}}>Wise</span>Tech </h2>
            </div>
            <div className="footer-menu">
                <h4>MENU</h4>
                <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="footer-service">
                <h4>SERVICE</h4>
                <ul>
                <li><a href="#">Design</a></li>
                <li><a href="#">Development</a></li>
                <li><a href="#">Marketing</a></li>
                <li><a href="#">See More</a></li>
                </ul>
            </div>
            <div className="footer-social">
                <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
                <a href="#"><img src={telegramIcon} alt="telegram" /></a>
                <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
            </div>
            </div>
            <div className="footer-bottom">
            <p className="copyright">Copyright © 2024 wiseTech. All Rights Reserved.</p>
            <div className="footer-links">
                <a href="#">Terms of Use</a>
                <a href="#">Privacy Policy</a>
            </div>
            </div>
        </footer>
        );
};


export default Footer;
