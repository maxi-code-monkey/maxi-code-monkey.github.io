import { Link, Typography } from '@mui/material';
import React from 'react';

import FixedSideElement from '../../../components/FixedSideElement';

import { styles } from './styles';

const RightBar = () => {
  return (
    <FixedSideElement
      side="right"
    >
      <Typography sx={styles.text} variant="body1">
        <Link sx={styles.link} href="mailto:maxi.gomez.tumini@live.com" underline="none">
          maxi.gomez.tumini@live.com
        </Link>
      </Typography>
    </FixedSideElement>
  );
};

export default RightBar;