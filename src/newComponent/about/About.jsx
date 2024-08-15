import React from 'react';
import { Container, Grid, Typography, Button, Box, Card, CardContent, CardMedia } from '@mui/material';
import AboutImage from '../../assets/images/image-about.png'; 
import FeaturesImage from '../../assets/images/features-image.png'; 
import ProIconImg from '../../assets/images/ProIcon.png'; 
import CollaborationSvg from '../../assets/images/collaboration.svg';
import { useInView } from 'react-intersection-observer';
import './About.css'; // Import CSS for animations

const TimelineItem = ({ title, description, date, isVisible }) => (
    <div className={`timeline-item ${isVisible ? 'fade-in' : ''}`}>
        <div className="timeline-date">{date}</div>
        <div className="timeline-content">
            <Typography variant="h6">{title}</Typography>
            <Typography variant="body1">{description}</Typography>
        </div>
    </div>
);

const About = () => {
    const { ref: timelineRef, inView: timelineInView } = useInView({ triggerOnce: true });

    return (
        <Container sx={{ py: 6 }}>
            {/* About Section */}
            <Grid container spacing={4} alignItems="center" sx={{ mb: 6 }}>
                <Grid item xs={12} md={6}>
                    <Box component="img" src={AboutImage} alt="About WiseTech" sx={{ width: '100%', borderRadius: 2 }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" color="primary" gutterBottom>
                        DISCOVER WISETECH
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        Pioneering Web, Mobile, and Desktop Solutions
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        Your Reliable Technology Partner
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        At WiseTech, we seamlessly integrate with your team to build lasting relationships. We deliver tailored, high-performance applications focused on innovation and continuous support. Let's turn your ideas into reality together.
                    </Typography>
                    <Button variant="contained" color="primary">
                        LEARN MORE
                    </Button>
                </Grid>
            </Grid>

            {/* Solutions Section */}
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" color="primary" gutterBottom>
                        OUR SERVICES
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        Transform Your Digital Presence with WiseTech
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        We offer a comprehensive suite of services, blending technical expertise, creative design, and deep business understanding to develop mobile, web, and desktop applications.
                    </Typography>
                    <ul>
                        <li>Expertise in mobile, web, and desktop application development</li>
                        <li>Innovative and user-centric design tailored to your needs</li>
                        <li>Your strategic partner for long-term success</li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box component="img" src={FeaturesImage} alt="WiseTech Solutions" sx={{ width: '100%', borderRadius: 2 }} />
                </Grid>
            </Grid>

            {/* Expertise Section */}
            <Grid container spacing={4} alignItems="center" sx={{ mb: 6 }}>
                <Grid item xs={12} md={6}>
                    <Box component="img" src={AboutImage} alt="WiseTech Expertise" sx={{ width: '100%', borderRadius: 2 }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" color="primary" gutterBottom>
                        EXPERTISE
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        Mastering Technology for Your Success
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        Your Dedicated Development Partner
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        WiseTech specializes in creating and maintaining applications across various platforms, ensuring high-quality results that drive your business forward. Let us help you stay ahead in the digital landscape.
                    </Typography>
                    <Button variant="contained" color="primary">
                        OUR EXPERTISE
                    </Button>
                </Grid>
            </Grid>

            {/* Solutions Section (Different Content) */}
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" color="primary" gutterBottom>
                        WHY CHOOSE US
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        Experience Tailored Solutions with WiseTech
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        We combine technical proficiency with a deep understanding of your business needs to craft applications that stand out. Our goal is to provide solutions that are not only functional but also enhance your digital strategy.
                    </Typography>
                    <ul>
                        <li>Customized solutions for your unique business challenges</li>
                        <li>User-friendly applications with a focus on performance</li>
                        <li>A partner committed to your long-term success</li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box component="img" src={FeaturesImage} alt="Why Choose WiseTech" sx={{ width: '100%', borderRadius: 2 }} />
                </Grid>
            </Grid>

            {/* Timeline Section */}
            <Grid container spacing={4} sx={{ mt: 4 }}>
                <Grid item xs={12}>
                    <Typography variant="h6" color="primary" gutterBottom>
                        OUR JOURNEY
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        Milestones and Achievements
                    </Typography>
                    <div ref={timelineRef} className="timeline">
                        <TimelineItem
                            title="Company Founded"
                            description="WiseTech was established to provide innovative tech solutions."
                            date="2015"
                            isVisible={timelineInView}
                        />
                        <TimelineItem
                            title="First Major Project"
                            description="Completed our first major project, setting new standards in the industry."
                            date="2017"
                            isVisible={timelineInView}
                        />
                        <TimelineItem
                            title="International Expansion"
                            description="Expanded our services internationally, reaching new markets."
                            date="2019"
                            isVisible={timelineInView}
                        />
                        <TimelineItem
                            title="New Innovations"
                            description="Launched cutting-edge technologies and services to keep pace with industry trends."
                            date="2022"
                            isVisible={timelineInView}
                        />
                    </div>
                </Grid>
            </Grid>

            {/* Cards Section */}
            <Grid container spacing={4} sx={{ mt: 4 }}>
                <Grid item xs={12} md={4}>
                    <Card variant="outlined" sx={{ borderColor: '#f3d1bf' }}>
                        <CardContent>
                            <Typography variant="h6" color="primary" gutterBottom>
                                INDUSTRY EXPERTISE
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                Partner with us for specialized IT solutions that meet the specific needs of your industry, leveraging our extensive experience.
                            </Typography>
                            <Button href="/" sx={{ color: '#fd0100', mt: 2 }}>Read more</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card variant="outlined" sx={{ borderColor: '#f3d1bf' }}>
                        <CardContent>
                            <CardMedia component="img" src={ProIconImg} alt="Professional Icon" sx={{ width: '80px', height: 'auto', mb: 2 }} />
                            <Typography variant="h6" gutterBottom>
                                PROFESSIONAL SERVICES
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                We offer a wide range of services that include everything from technical development to design, ensuring your applications are robust and user-friendly.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card variant="outlined" sx={{ borderColor: '#f3d1bf' }}>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <CardMedia component="img" src={CollaborationSvg} alt="Collaboration Icon" sx={{ width: '80px', height: 'auto', mb: 2 }} />
                            <Typography variant="h6" gutterBottom>
                                COLLABORATIVE APPROACH
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                We work closely with our clients to deliver long-term, sustainable IT solutions that align with your business goals and grow with your company.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;
