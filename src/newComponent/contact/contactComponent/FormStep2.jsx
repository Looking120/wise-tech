import React from 'react';
import { TextField, Select, MenuItem, Grid, Box } from '@mui/material';

// Custom styles for the dropdown menu
const menuProps = {
  PaperProps: {
    sx: {
      maxHeight: 200, // Adjust height as needed
      overflowY: 'auto', // Enable vertical scrolling within the dropdown if needed
      overflowX: 'hidden', // Disable horizontal scrolling
    },
  },
};

export default function FormStep2() {
  return (
    <Box component="form" noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="tel"
            label="Your Phone Number"
            variant="outlined"
            margin="normal"
            sx={{ borderRadius: 1 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Select
            fullWidth
            displayEmpty
            defaultValue=""
            sx={{ marginY: 2, borderRadius: 1, overflow: 'hidden' }}
            MenuProps={menuProps} // Apply custom styles to the menu
          >
            <MenuItem value="" disabled>Select Subject</MenuItem>
            {/* Add as many MenuItem as needed */}
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </Box>
  );
}
