import React from 'react';
import { Box } from '@mui/material';
import { styles } from './styles';

export enum EFixedElement {
  LEFT = 'left',
  RIGHT = 'right'
};

interface Props {
  side: EFixedElement;
  children: React.ReactNode;
};

const FixedSideElement = ({
  side,
  children,
}: Props ) => {
  const containerStyles = side === 'left' ? styles.left : styles.right;
  return (
    <Box display={{ xs: 'none', lg: 'block' }} sx={containerStyles}>
      {children}
    </Box>    
  );
};

export default FixedSideElement;