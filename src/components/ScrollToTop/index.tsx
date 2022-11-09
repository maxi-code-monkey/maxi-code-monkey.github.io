import React from 'react';
import { useScrollTrigger, Fade, Box, Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

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
        sx={{ position: 'fixed', bottom: '16px', right: '50%' }}
      >
        <Fab size="large" aria-label="scroll to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Fade>
  );
};

export default ScrollToTop;