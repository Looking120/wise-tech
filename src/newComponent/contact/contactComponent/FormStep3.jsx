import React from 'react';
import { TextField, Box } from '@mui/material';

export default function FormStep3() {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        fullWidth
        multiline
        rows={4}
        placeholder="Your Message"
        variant="outlined"
        margin="normal"
        sx={{ borderRadius: 1 }}
      />
    </Box>
  );
}
