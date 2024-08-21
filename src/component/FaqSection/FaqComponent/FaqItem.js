import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import arrowIcon from '../../../assets/images/imgIcon/arrow-icon.png';

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFaq = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Box sx={{ marginBottom: 2, boxShadow: 2, borderRadius: 2, padding: 2, transition: 'transform 1s' }}>
            <Box
                onClick={toggleFaq}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    userSelect: 'none',
                }}
            >
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    {question}
                </Typography>
                <span
                    style={{
                        display: 'block',
                        width: '24px',
                        height: '24px',
                        backgroundImage: `url(${arrowIcon})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                    }}
                />
            </Box>
            {isOpen && (
                <Box sx={{ marginTop: 2 }}>
                    <Typography variant="body1" sx={{ color: '#555' }}>
                        {answer}
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default FaqItem;
