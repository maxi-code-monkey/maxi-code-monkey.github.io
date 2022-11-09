import React from 'react';
import { Box, Typography, Container } from '@mui/material';

import SectionTitle from '../../components/SectionTitle';
import InlineTypography from '../../components/InlineTypography';

import { styles } from './styles';

const About = () => (
  <Box sx={styles.sectionContainer} id="about">
    <Container maxWidth="lg">
      <SectionTitle number="01." name="About Me" />
      <Box sx={styles.textContainer}>
        <Box>
          <Typography sx={styles.message} variant="body1">
            Hey there! Thanks for taking the time to read through and welcome to my personal portfolio.
            My name is Maximiliano and I love building new stuff and facing new challenges.
          </Typography>
          <Typography sx={styles.message} variant="body1">
            I´ve been working on IT as a Software Engineer for 11 years now. I started this journey as a Backend Developer with .NET
            back in 2011. Five years later I started walking down another path as a Fullstack with the launch of Angular JS.
          </Typography>
          <Typography sx={styles.message} variant="body1">
            Fast-forward to today and for the last 6 years I´ve been working mainly with {' '}
            <InlineTypography text="ReactJS" /> and, in the last 2 years, I´ve also added
            a little bit of {' '} <InlineTypography text="NodeJS" /> and {' '} <InlineTypography text="React Native" /> here and there.
          </Typography>
        </Box>
        {/* Img */}
        <Box>

        </Box>
      </Box>
    </Container>
  </Box>
);

export default About;