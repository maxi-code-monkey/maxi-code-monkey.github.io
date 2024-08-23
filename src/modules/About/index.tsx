import React from 'react';
import { Box, Typography, Container } from '@mui/material';

import SectionTitle from '../../components/SectionTitle';
import InlineTypography from '../../components/InlineTypography';

import { styles } from './styles';

const About = () => {
  const yearsOfExperience = new Date().getFullYear() - 2011;
  const yearsOfExperienceusingReact = new Date().getFullYear() - 2016;

  return (
    <Box sx={styles.sectionContainer} id="about">
      <SectionTitle number="01." name="About Me" />
      <Box className='text-container' sx={styles.textContainer}>
        <Typography sx={styles.message} variant="body1">
          I´ve been working on IT as a Software Engineer for {yearsOfExperience} years now. I started this journey as a Backend Developer with .NET
          back in 2011. Five years later I started walking down another path as a Fullstack Developer with the launch of Angular JS.
        </Typography>
        <Typography sx={styles.message} variant="body1">
          Fast-forward to today and for the last {yearsOfExperienceusingReact} years I´ve been working mainly with {' '}
          <InlineTypography text="ReactJS" /> and, in the last 2 years, I´ve also added
          a little bit of {' '} <InlineTypography text="NodeJS" /> and {' '} <InlineTypography text="React Native" /> here and there.
        </Typography>
        <Typography sx={styles.message} variant="body1">
          My main objective nowadays is to go a little bit deeper into the rabit hole as a Fullstack Developer and keep on working and improving
          my {' '} <InlineTypography text="NodeJS" /> skills and keep on creating new and amazing stuff with {' '} <InlineTypography text="ReactJS" /> 
        </Typography>
      </Box>
    </Box>
  );
}

export default About;