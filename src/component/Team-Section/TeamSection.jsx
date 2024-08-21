import React, { useState } from 'react';
import './TeamSection.css'; 
import teamsImg1 from '../../assets/images/imgTeams/water-kalubi.jpg';
import teamsImg2 from '../../assets/images/imgTeams/profile.png';
import teamsImg3 from '../../assets/images/imgTeams/amadou-oury-bah.png';
import teamsImg4 from '../../assets/images/imgTeams/ctc-image.png';
import teamsImg5 from '../../assets/images/imgTeams/success_Stoc.png';
import { Container, Typography, Grid, Box, Avatar, IconButton } from '@mui/material';
import { GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material';


const TeamSection = () => {

const teamMembers = [
    {
        name: 'Water Kalubi',
        role: 'CEO',
        img: teamsImg1,
    },
    {
        name: 'Amadou Oury Bah',
        role: 'Front end programmer',
        img: teamsImg3,
    },
    {
        name: 'Deja Brady',
        role: 'Front end programmer',
        img: teamsImg2,
    },
    {
        name: 'Harrison Stein',
        role: 'Secretary',
        img: teamsImg5,
    },
    ];

    return (
        <section className="team-section">
        <Box sx={{ textAlign: 'center', py: 6 }}>
            <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', mb: 2 , color:'#fd0100'}}>
                OUR TEAM
            </Typography>
            <Typography variant="h4" component="div" sx={{ mb: 6 }}>
                Team of Developers<br />and the rest of the company
            </Typography>

            <Container maxWidth="lg">
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
                                        <GitHub sx={{ color: 'black' }} />
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
        </Box>

        <Box className="ctc-section" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 6 }}>
            <Box sx={{ flex: 1, textAlign: 'center' }}>
                <img src={teamsImg4} alt="Nathan Musoko Kalenga" style={{ maxWidth: '100%', borderRadius: '10px' }} />
            </Box>
            <Box sx={{ flex: 1, padding: { xs: 3, md: 6 }, textAlign: 'left' }}>
                <Typography variant="h4" component="div" sx={{ mb: 3, fontWeight: 'bold' }}>
                    CTO
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: 'gray' }}>
                    WiseTech is a strategic digital partner. Our expertise in designing and integrating innovative solutions improves the efficiency and usability of your ideas. Entrust us with your projects to obtain high-quality technological products that will propel your business to new heights.
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    Nathan Musoko Kalenga<br />CTO
                </Typography>
            </Box>
        </Box>
    </section>
);
};

export default TeamSection;
