import React, { useState } from 'react';
import './TeamSection.css'; 
import teamsImg1 from '../../assets/images/imgTeams/water-kalubi.jpg';
import teamsImg2 from '../../assets/images/imgTeams/profile.png';
import teamsImg3 from '../../assets/images/imgTeams/amadou-oury-bah.png';
import teamsImg4 from '../../assets/images/imgTeams/ctc-image.png';
import teamsImg5 from '../../assets/images/imgTeams/success_Stoc.png';

const TeamSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section className="team-section">
            <div className="team-header">
                <h3>OUR TEAM</h3>
                <h2>Team of Developers<br />and the rest of the company</h2>
            </div>
            
            <div className="team-carousel">
                {teamMembers.map((member, index) => (
                    <TeamMember 
                        key={index} 
                        image={member.image} 
                        name={member.name} 
                        position={member.position} 
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    />
                ))}
            </div>
        
            <div className="carousel-indicators">
                {teamMembers.map((_, index) => (
                    <span 
                        key={index} 
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        
            <div className="ctc-section">
                <div className="ctc-image">
                    <img src={teamsImg4} alt="Nathan Musoko Kalenga" />
                </div>
                <div className="ctc-quote">
                    <h4>CTO</h4>
                    <p>WiseTech is a strategic digital partner. Our expertise in designing and
                        integrating innovative solutions improves the efficiency and usability of your ideas. Entrust us with your 
                        projects to obtain high-quality technological products that will propel your business to new heights.</p>
                    <span>Nathan Musoko Kalenga<br />CTO</span>
                </div>
            </div>
        </section>
    );
};

const TeamMember = ({ image, name, position, style }) => (
    <div className="team-member" style={style}>
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <p>{position}</p>
    </div>
);

const teamMembers = [
    {
        image: teamsImg1,
        name: "Water Kalubi",
        position: "C.O"
    },
    {
        image: teamsImg2,
        name: "Joshua Ndayi",
        position: "Front-end Developer"
    },
    {
        image: teamsImg3,
        name: "Amadou Oury Bah",
        position: "Logistics Expert"
    },
    {
        image: teamsImg5,
        name: "Izabella Tabakova",
        position: "Secrete General"
    }
];

export default TeamSection;
