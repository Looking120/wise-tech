import React from 'react';
import { TextField, Grid, Box } from '@mui/material';

export default function FormStep1() {
  return (
    <Box component="form" noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            margin="normal"
            sx={{ borderRadius: 1 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="email"
            label="Your Email"
            variant="outlined"
            margin="normal"
            sx={{ borderRadius: 1 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
