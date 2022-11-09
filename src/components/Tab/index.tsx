import React, { useState } from 'react';
import { Tabs, Tab, Box, useMediaQuery } from '@mui/material';

import TabPanel from './TabPanel';
import { WorkTabs } from '../../constants/tabs';
import { styles } from './styles';

const CustomTabs = () => {
  const [value, setValue] = useState<number>(0);
  const isTabletOrAbove = useMediaQuery('(min-width: 768px)');

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={styles.tabSectionContainer}
    >
      <Tabs
        orientation={isTabletOrAbove ? 'vertical' : 'horizontal'}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab sx={styles.tab} label={WorkTabs[0].employeer} />
        <Tab sx={styles.tab} label={WorkTabs[1].employeer} />
        <Tab sx={styles.tab} label={WorkTabs[2].employeer} />
      </Tabs>
      {WorkTabs.map((tab) => (
        <TabPanel value={value} {...tab} />
      ))}
    </Box>
  );
};

export default CustomTabs;