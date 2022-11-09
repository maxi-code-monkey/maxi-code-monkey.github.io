import React from 'react';
import { Box, Container } from '@mui/material';

import SectionTitle from '../../components/SectionTitle';
import CustomTabs from '../../components/Tab';

import { styles } from './styles';

const About = () => (
  <Box sx={styles.sectionContainer} id="experience">
    <Container maxWidth="lg">
      <SectionTitle number="03." name="Where I´ve Worked" />
      <CustomTabs />
    </Container>
  </Box>
);

export default About;