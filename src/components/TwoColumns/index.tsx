import React from "react";
import { Box } from "@mui/material";

import MainInfo from "../../modules/MainInfo";
import About from "../../modules/About";

import { styles } from './styles';
import WorkExperience from "../../modules/Experience";
import Contact from "../../modules/Contact";

const TwoColumns = () => {
  return (
    <Box className='two-columns-container' sx={styles.twoColumnsContainer}>
      <Box className='left-column' sx={styles.leftColumn}>
        <MainInfo />
      </Box>
      <Box className='right-column' sx={styles.rightColumn}>
        <About />
        <WorkExperience />
        <Contact />
      </Box>
    </Box>
  )
}

export default TwoColumns;