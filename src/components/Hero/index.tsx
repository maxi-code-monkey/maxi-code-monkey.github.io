import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import BodyButton from '../BodyButton';
import { styles } from './styles';

const Hero = () => {
  return (
    <Box sx={styles.heroContainer}>
      <Container sx={styles.titleContainer}>
        <Typography sx={styles.greeting} variant="body1">
          Hey! my name is
        </Typography>
        <Typography sx={styles.name} variant="h1">
          Maxi Gomez.
        </Typography>
        <Typography sx={styles.title} variant="h1">
          I like to build things.
        </Typography>
        <Typography sx={styles.bio} variant="body1">
          I´m a Software Engineer who enjoys building all kind of things.
          I´m currently focused on improving and expanding Equinox´s UI/UX experience.
        </Typography>
        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }}>
          <BodyButton text="Schedule a meeting with me" isALink linkHref="https://calendly.com/maxi-gomez-tumini/30min" />
          <BodyButton text="Download my resume!" />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;