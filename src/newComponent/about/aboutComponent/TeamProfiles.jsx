import React from 'react';
import './AboutSection.css'; // Ajoutez le style CSS ici

const AboutSection = () => {
  return (
    <div className="responsive-container-block bigContainer">
      <div className="responsive-container-block Container bottomContainer">
        <div className="allText bottomText">
          <p className="text-blk headingText">About</p>
          <p className="text-blk subHeadingText">We build to your bespoke</p>
          <p className="text-blk description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum ut. Congue in dignissim tincidunt ut dolor eu. Mi, eget posuere vitae sed purus nisl lorem.
          </p>
          <a href="#">
            <button className="explore">View More</button>
          </a>
        </div>
        <div className="videoContainer">
          <iframe
            allowFullScreen
            className="mainVideo"
            controls
            src="https://www.youtube.com/embed/svg%3E?"
            title="About Video"
          ></iframe>
          <img
            className="dotsImg image-block"
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg"
            alt="Decorative Dots"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
