import React from 'react';
import { Box } from '@mui/material';
import LeftBar from './LeftBar/index';
import RightBar from './RightBar/index';
import Hero from '../../components/Hero';
import Contact from '../Contact';
import About from '../About';
import Experience from '../Experience';

const Main = () => (
  <Box> 
    <LeftBar />
    <RightBar />
    <Hero />
    <About />
    <Experience />
    <Contact />
  </Box>
);

export default Main;