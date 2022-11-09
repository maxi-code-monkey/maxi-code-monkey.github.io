import React from 'react';
import { Box, Typography } from '@mui/material';
import { styles } from './styles';

interface Props {
  number: string;
  name: string;
};

const SectionTitle = ({
  number,
  name,
}: Props) => {
  return (
    <Box sx={styles.container}>
      <Typography variant="body1" color="secondary">
        {number}
      </Typography>
      <Typography sx={styles.name} variant="h2">
        {name}
      </Typography>
    </Box>
  );
};

export default SectionTitle;