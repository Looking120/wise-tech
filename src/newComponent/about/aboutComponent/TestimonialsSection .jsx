import React from 'react';
import { Container, Typography, Grid, Box, Avatar, Paper } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';

const testimonials = [
  {
    name: 'Lucian Obrien',
    date: '14 Aug 2024',
    text: 'Excellent Work! Thanks a lot!',
    rating: 4,
    img: 'path_to_image1',
  },
  {
    name: 'Deja Brady',
    date: '13 Aug 2024',
    text: 'It\'s a very good dashboard and we are really liking the product. We\'ve done some things like migrate to TS and implementing a react useContext api, to fit our job methodology but the product is one of the best in terms of design and application architecture. The team did a really good job.',
    rating: 5,
    img: 'path_to_image2',
  },
  {
    name: 'Harrison Stein',
    date: '12 Aug 2024',
    text: 'Customer support is really fast and helpful. The design of this theme looks amazing and the code is very clean and readable. Really good job!',
    rating: 4,
    img: 'path_to_image3',
  },
  {
    name: 'Reece Chung',
    date: '11 Aug 2024',
    text: 'Amazing, really good code quality and gives you a lot of examples for implementations.',
    rating: 2,
    img: 'path_to_image4',
  },
  {
    name: 'Reece Chung',
    date: '11 Aug 2024',
    text: 'Amazing, really good code quality and gives you a lot of examples for implementations.',
    rating: 2,
    img: 'path_to_image4',
  },
  {
    name: 'Reece Chung',
    date: '11 Aug 2024',
    text: 'Amazing, really good code quality and gives you a lot of examples for implementations.',
    rating: 2,
    img: 'path_to_image4',
  },  {
    name: 'Deja Brady',
    date: '13 Aug 2024',
    text: 'It\'s a very good dashboard and we are really liking the product. We\'ve done some things like migrate to TS and implementing a react useContext api, to fit our job methodology but the product is one of the best in terms of design and application architecture. The team did a really good job.',
    rating: 5,
    img: 'path_to_image2',
  },
  {
    name: 'Lucian Obrien',
    date: '14 Aug 2024',
    text: 'Excellent Work! Thanks a lot!',
    rating: 4,
    img: 'path_to_image1',
  },
];

const TestimonialSection = () => {
  return (
    <Box
      sx={{
        py: 6,
        backgroundColor: '#0a192f',
        color: 'white',
        textAlign: 'left',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ color: 'gray', textTransform: 'uppercase', marginTop: 15, mb: 4 }}>
              Testimonials
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
              Who love  
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 4 }}>
              my work
            </Typography>
            <Typography variant="body1" sx={{ mb: 10 }}>
              Our goal is to create a product and service that you’re satisfied with and use it every day. This is why we’re constantly working on our services to make it better every day and really listen to what our users have to say.
            </Typography>
            <Typography variant="body2" component="a" href="#" sx={{ color: '#00FF00', textDecoration: 'none' }}>
              Read more testimonials
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                maxHeight: '500px', 
                overflowY: 'scroll',
                overflowX: 'hidden',
                // Hide scrollbar in Webkit-based browsers (Chrome, Safari)
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
                // Hide scrollbar in Firefox
                scrollbarWidth: 'none',
              }}
            >
              <Grid container spacing={4}>
                {testimonials.map((testimonial, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Paper
                      elevation={4}
                      sx={{
                        padding: 2,
                        backgroundColor: '#1c2835',
                        borderRadius: 2,
                        color: 'white',
                      }}
                    >
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        <span>&#8220;</span>{testimonial.text}<span>&#8221;</span>
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          i < testimonial.rating ? <Star key={i} sx={{ color: '#FFD700' }} /> : <StarBorder key={i} sx={{ color: '#FFD700' }} />
                        ))}
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar src={testimonial.img} sx={{ width: 40, height: 40, mr: 2 }} />
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                            {testimonial.name}
                          </Typography>
                          <Typography variant="caption" sx={{ color: 'gray' }}>
                            {testimonial.date}
                          </Typography>
                        </Box>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialSection;