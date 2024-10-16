import React from 'react';
import { Container, Typography, Box, Grid, LinearProgress, Button } from '@mui/material';
import backImag from '../../../assets/images/working-at-night.jpg';
import imagesImg from '../../../assets/images/Portfolio/3.jpeg';
import bfImg from '../../../assets/images/Group.jpg';

const AboutUs = () => {
  return (
    <div>
      {/* Header section with background image */}
      <Box
        sx={{
          position: 'relative',
          minHeight: 300, 
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 1, 1), rgba(0, 0, 0, 0.3)), url(${backImag})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          color: 'white',
          textAlign: 'left',
          paddingLeft: 30,
          paddingRight: 4,
          paddingTop: 10,
          paddingBottom: 10, 
        }}
      >
        {/* Text content */}
        <Box sx={{ maxWidth: 600, position: 'relative', zIndex: 2 }}>
          <Typography variant="h1" sx={{ 
            fontWeight: 'bold', 
            marginTop: 15,
            color: '#fd0100'
          }}>
            Who
          </Typography>
          <Typography variant="h3" sx={{ 
            fontWeight: 'bold', 
            marginBottom: 1
          }}>
            we are?
          </Typography>
          <Typography variant="body1" sx={{ 
            marginTop: 2, 
            marginBottom: 1
          }}>
            We specialize in creating web, mobile, 
          </Typography>
          <Typography variant="body1">
            and desktop applications.
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default AboutUs;
