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

      {/* Main content section */}
      <Container maxWidth="md" sx={{ py: 5 }}>
        <Box sx={{ flexGrow: 1, padding: 2}}>
          <Grid container spacing={4} alignItems="center">
            {/* Images section */}
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box
                    component="img"
                    src={imagesImg} 
                    sx={{ 
                      width: '100%', 
                      height: 200, // Adjust the height as needed
                      borderRadius: 5,
                      objectFit: 'cover',
                      marginTop: 5,
                      marginBottom: 5
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Box
                    component="img"
                    src={bfImg}
                    sx={{ 
                      width: '100%', 
                      height: 300, 
                      borderRadius: 5,
                      objectFit: 'cover',
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>

            {/* Text and progress bars section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontSize: '2.5rem' }}>
                What is WiseTech?
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '0.875rem' , color:'#7b848d'}}>
                WiseTech is dedicated to delivering the most advanced and user-friendly solutions on the market. 
                We provide thorough documentation and video guides to ensure a smooth setup of your site. 
                Whether you need a web, mobile, or desktop application, WiseTexc is the partner you are looking for.
              </Typography>

              {/* Progress bars */}
              <Box sx={{ my: 2 }}>
                <Typography variant="body2" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>WebApp</span> <span>80%</span>
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={80}
                  sx={{
                    height: 4, 
                    borderRadius: 5,
                    marginBottom: 2,
                    backgroundColor: '#F9BBBB',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: '#fd0100',
                    },
                  }}
                />
                <Typography variant="body2" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Mobile App</span> <span>60%</span>
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={60}
                  sx={{
                    height: 4, 
                    borderRadius: 5,
                    marginBottom: 2,
                    backgroundColor: '#B6D4E2',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: '#0077B5',
                    },
                  }}
                />
                <Typography variant="body2" sx={{ display: 'flex', justifyContent: 'space-between'}}>
                  <span>Desktop App</span> <span>40%</span>
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={40}
                  sx={{
                    height: 4, // Reduced height for thinner progress bar
                    borderRadius: 5,
                    backgroundColor: '#B0D8CC',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: '#2C9C78',
                    },
                  }}
                />
              </Box>

              {/* Button */}
              <Button variant="outlined" sx={{ marginTop: 2 }}>
                Our work
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default AboutUs;
