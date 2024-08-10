import React, { useState, useRef } from 'react';
import './VideoReel.css';
import videoSrc from '../../assets/images/IMG_1105.MOV';

const VideoReel = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const playVideo = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <section className="video-reel">
            <div className="video">
                <video ref={videoRef} src={videoSrc} controls>
                    Your browser does not support the video tag.
                </video>
                {!isPlaying && (
                    <div className="play-icon" onClick={playVideo}>
                        <span>▶</span>
                    </div>
                )}
            </div>
            <div className="video-text">
                <h3>VIDEO REEL</h3>
                <h2>Maximize value with innovative IT solutions for mobile, web, and desktop.</h2>
                <p>Expertise in development and business understanding to design IT solutions adapted to the needs of merchants and future partners.</p>
            </div>
        </section>
    );
};

export default VideoReel;
