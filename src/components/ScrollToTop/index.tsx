import React, { useState } from 'react';
import { useScrollTrigger, Fade, Box, Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { styles } from './styles';

const ScrollToTop = () => {

  const trigger = useScrollTrigger({
    disableHysteresis: false,
    threshold: 500,
  });

  const handleClick = () => (
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  );

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={styles.container}
      >
        <Fab sx={styles.fab} size="large" aria-label="scroll to top">
          <KeyboardArrowUpIcon sx={styles.icon} />
        </Fab>
      </Box>
    </Fade>
  );
};

export default ScrollToTop;