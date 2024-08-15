import React, { useState } from 'react';
import { Container, Box, Typography, Button, Stepper, Step, StepLabel } from '@mui/material';
import { ColorlibConnector, ColorlibStepIcon } from './StepComponent'; // Ensure this path is correct
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';

const steps = ['Personal Information', 'Contact Details', 'Message'];

export default function ContactForm() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginY: 10, // Margin top and bottom
                    padding: 2,
                    borderRadius: 2,
                    boxShadow: 2,
                }}
            >
                <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
                    Contact Us
                </Typography>

                <Stepper activeStep={activeStep} alternativeLabel connector={<ColorlibConnector />}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <Box sx={{ width: '100%', mt: 3 }}>
                    {activeStep === 0 && <FormStep1 />}
                    {activeStep === 1 && <FormStep2 />}
                    {activeStep === 2 && <FormStep3 />}

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                        <Button disabled={activeStep === 0} onClick={handleBack}>
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            onClick={activeStep === steps.length - 1 ? handleReset : handleNext}
                        >
                            {activeStep === steps.length - 1 ? 'Reset' : 'Next'}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}
