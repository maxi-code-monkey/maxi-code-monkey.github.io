import React from 'react';
import { Fade, Box, Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { ScrollToTopIncomingProps } from './types';

import { styles } from './styles';

const ScrollToTop = ({
  isVisible,
  selector,
}: ScrollToTopIncomingProps) => {

  const handleClick = () =>
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Fade in={isVisible}>
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