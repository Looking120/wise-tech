import React from 'react';
import './footer.css'

const FooterSection = ({ title, children }) => {
    return (
        <div className="footer-section">
        <h4>{title}</h4>
        {children}
        </div>
    );
};

export default FooterSection;
