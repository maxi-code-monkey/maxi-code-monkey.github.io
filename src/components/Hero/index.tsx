import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import BodyButton from '../BodyButton';
import Pdf from '../../assets/pdf/Maximiliano_Gomez.pdf';

import { styles } from './styles';

const Hero = () => {
  return (
    <Box className='hero-wrapper' sx={styles.heroContainer}>
      <Container className='content-container' sx={styles.titleContainer}>
        <Typography sx={styles.greeting} variant="body1">
          Hey, welcome to my personal portfolio!
        </Typography>
        <Typography sx={styles.bio} variant="body1">
          I´m a passionate Senior Software Engineer who's been doing what he loves ever since 2011.
        </Typography>
        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }}>
          <BodyButton text="Schedule a meeting with me" isALink linkHref="https://calendly.com/maxi-gomez-tumini/30min" />
          <BodyButton text="Download my resume!" isALink linkHref={Pdf} />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;