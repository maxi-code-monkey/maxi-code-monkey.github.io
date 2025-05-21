import React from "react";
import { Box } from "@mui/material";

import About from "../../modules/About";
import Contact from "../../modules/Contact";
import MainInfo from "../../modules/MainInfo";
import Referrals from "../../modules/Referrals";
import WorkExperience from "../../modules/Experience";

import { WithScrollToTop } from "../../hoc/withScrollToTop/withScrollToTop";

import { styles } from './styles';

const scrollToTopSelector = 'about-container';

const TwoColumns = () => {
  return (
    <Box className='two-columns-container' sx={styles.twoColumnsContainer}>
      <Box className='left-column' sx={styles.leftColumn}>
        <MainInfo />
      </Box>
      <Box className='right-column' sx={styles.rightColumn} component={'div'}>
        <Box className={scrollToTopSelector}>
          <About />
        </Box>
        <Referrals />
        <WithScrollToTop selector={`.${scrollToTopSelector}`}>
          <>
            <WorkExperience />
            <Contact />
          </>
        </WithScrollToTop>
      </Box>
    </Box>
  )
}

export default TwoColumns;