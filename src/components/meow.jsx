import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const StyledContainer = styled(Container)({
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#000',
    color: '#fff',
    padding: '0 2rem',
    position: 'relative',
    overflow: 'hidden', // Ensure the background image does not cause overflow
});

const ContentBox = styled(Box)({
    maxWidth: '600px',
    zIndex: 2,
});

const BackgroundImage = styled(Box)({
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://mediaclub.in/wp-content/uploads/2023/06/1.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 1,
});

const CustomButton = styled(Button)({
    backgroundColor: '#00bfa5',
    '&:hover': {
        backgroundColor: '#00897b',
    },
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
});

const Meow = () => {
    return (
        <StyledContainer maxWidth={false}>
            <BackgroundImage />
            <Grid container spacing={4} justifyContent="space-between" alignItems="center">
                <Grid item xs={12} sm={8}>
                    <ContentBox>
                        <Typography variant="h6" color="#00bfa5">
                            CREATIVE AGENCY
                        </Typography>
                        <Typography variant="h2" component="h1" gutterBottom>
                            Not a Regular <br />
                            <span style={{ color: '#00bfa5' }}>Media agency</span>
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Every day we are working with clients to create awesome new things, what could be better.
                        </Typography>
                        <CustomButton variant="contained" startIcon={<PlayArrowIcon />}>
                            ABOUT US
                        </CustomButton>
                        <Typography variant="body2" color="#00bfa5" mt={1}>
                            International Creative Production Hub
                        </Typography>
                    </ContentBox>
                </Grid>
                <Grid item xs={12} sm={4}>
                    {/* Optionally, add more content or images here */}
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Meow;
