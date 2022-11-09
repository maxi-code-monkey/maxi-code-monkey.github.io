import React from 'react';
import { Box } from '@mui/material';
import { styles } from './styles';

interface Props {
  side: 'left' | 'right';
  children: React.ReactNode;
};

const FixedSideElement = ({
  side,
  children,
}: Props ) => {
  const containerStyles = side === 'left' ? styles.left : styles.right;
  return (
    <Box display={{ xs: 'none', md: 'block' }} sx={containerStyles}>
      {children}
    </Box>    
  );
};

export default FixedSideElement;