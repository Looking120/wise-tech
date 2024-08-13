import React from 'react';
import InfoItem from './InfoItem';
import './ContactInfoSection.css'
import contactIfoImg1 from '../../assets/images/imgIcon/call-incoming.svg';
import contactIfoImg2 from '../../assets/images/imgIcon/at.svg';
import contactIfoImg3 from '../../assets/images/imgIcon/marker.svg';


const ContactInfoSection = () => {
    return (
        <section className="contact-info-section">
        <div className="info-container">
            <InfoItem
            iconSrc={contactIfoImg1}
            title="Phone" 
            content="+375 (25) 992-36-58" 
            />
            <InfoItem 
            iconSrc={contactIfoImg2}
            title="Mail" 
            content="info@wisetech.com" 
            style={{ backgroundColor: '#F3D1BF' }} 
            />
            <InfoItem 
            iconSrc={contactIfoImg3}
            title="Address" 
            content="lenina 12B1" 
            />
        </div>
        </section>
    );
};



export default ContactInfoSection;
