import React from 'react';
import { Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

interface Props {
  list: Array<string>;
  isHorizontal?: boolean;
};

const CustomList = ({
  list,
  isHorizontal = false
}: Props) => {
  const sx = { display: 'block', columns: '3' };
  return (
    <List sx={isHorizontal ? sx : {}}>
      {list.map((b) => 
        <ListItem sx={{ paddingLeft: '0px', paddingRight: '5px' }}>
          <ListItemIcon sx={{ minWidth: '30px' }}>
            <ArrowRightIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary={<Typography color="text.secondary" variant="body1">{b}</Typography>} />
        </ListItem>
      )}
    </List>
  )
};

export default CustomList;