import React from 'react';
import { Container, Typography, Grid, Box, Avatar, IconButton } from '@mui/material';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

const teamMembers = [
  {
    name: 'Jayvion Simon',
    role: 'CEO',
    img: 'path_to_image1',
  },
  {
    name: 'Lucian Obrien',
    role: 'CTO',
    img: 'path_to_image2',
  },
  {
    name: 'Deja Brady',
    role: 'Project Coordinator',
    img: 'path_to_image3',
  },
  {
    name: 'Harrison Stein',
    role: 'Team Leader',
    img: 'path_to_image4',
  },
];

const TeamSection = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', py: 6 }}>
      <Typography variant="h6" component="div" sx={{ color: 'gray', textTransform: 'uppercase', mb: 2 }}>
        Dream Team
      </Typography>
      <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', mb: 3 }}>
        Great team is the key
      </Typography>
      <Typography variant="body1" sx={{ mb: 6, color: 'gray' }}>
        Minimal will provide you support if you have any problems, our support team will reply within a day and we also have detailed documentation.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box sx={{
              textAlign: 'center',
              boxShadow: 2,
              borderRadius: 2,
              padding: 2,
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
              },
            }}>
              <Avatar
                src={member.img}
                alt={member.name}
                sx={{ width: 120, height: 120, margin: '0 auto 16px auto' }}
              />
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                {member.name}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'gray' }}>
                {member.role}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <IconButton aria-label="facebook">
                  <Facebook sx={{ color: 'blue' }} />
                </IconButton>
                <IconButton aria-label="instagram">
                  <Instagram sx={{ color: '#E1306C' }} />
                </IconButton>
                <IconButton aria-label="linkedin">
                  <LinkedIn sx={{ color: '#0077B5' }} />
                </IconButton>
                <IconButton aria-label="twitter">
                  <Twitter sx={{ color: '#1DA1F2' }} />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TeamSection;
