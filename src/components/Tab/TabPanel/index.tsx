import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CustomList from '../../List';

import InlineTypography from '../../InlineTypography';
import { styles } from '../styles';

export interface Props {
  index?: number;
  value?: number;
  position?: string;
  employeer?: string;
  date?: string;
  bullets?: Array<string>;
  techStack?: Array<string>;
};

const TabPanel = ({
  index,
  value,
  position,
  employeer,
  date,
  bullets,
  techStack,
}: Props) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ width: '100%' }}
    >
      {value === index && (
        <Box sx={styles.sectionContainer}>
          <Typography variant="h3" color="text.primary" >
            {position} <InlineTypography text={`@ ${employeer}`} />
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {date}
          </Typography>
          <CustomList list={bullets || []} />
          <Typography variant="body1" color="text.primary">
            Tech Stack
          </Typography>
          <CustomList list={techStack || []} isHorizontal />
        </Box>
      )}
    </div>
  );
};

export default TabPanel;