import React, { useState, useRef } from 'react';
import { Container, Box, Typography, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import videoSrc from '../../../assets/images/IMG_1105.MOV';

const WebDevelopmentSection = () => {
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
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', md: 'row' },
                    margin: { xs: '20px 0', sm: '30px 0', md: '40px 0', lg: '50px 0' },
                    padding: { xs: '20px 0', sm: '30px 0', md: '40px 0', lg: '50px 0' },

                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        position: 'relative',
                        paddingRight: { xs: 0, md: '30px', lg: '50px' },
                        marginTop: { xs: '20px', md: 0 },
                    }}
                >
                    <video
                        ref={videoRef}
                        src={videoSrc}
                        controls
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '10px',
                            objectFit: 'cover',
                        }}
                    >
                        Your browser does not support the video tag.
                    </video>
                    {!isPlaying && (
                        <IconButton
                            onClick={playVideo}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: { xs: '28px', sm: '32px', md: '36px', lg: '48px' },
                                color: 'white',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                padding: { xs: '10px', sm: '12px', md: '15px', lg: '20px' },
                                borderRadius: '50%',
                                cursor: 'pointer',
                            }}
                        >
                            <PlayArrowIcon fontSize="inherit" />
                        </IconButton>
                    )}
                </Box>
                <Box sx={{ flex: 1, padding: { xs: '0 15px', md: 0 } }}>
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#004aad',
                            fontSize: { xs: '12px', sm: '14px', md: '16px' },
                            marginBottom: '20px',
                            letterSpacing: '2px',
                            textAlign: 'left',
                        }}
                    >
                        WEB DEVELOPMENT
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{
                            fontSize: { xs: '18px', sm: '20px', md: '22px', lg: '24px' },
                            marginBottom: '20px',
                            textAlign: 'left',
                        }}
                    >
                        Build your digital presence with cutting-edge web solutions.
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '12px', sm: '13px', md: '14px', lg: '16px' },
                            lineHeight: 1.6,
                            textAlign: 'left',
                            color: '#505050',
                        }}
                    >
                        Our team of experts delivers tailored web development services, creating responsive, user-friendly, and scalable websites that drive business success.
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default WebDevelopmentSection;
