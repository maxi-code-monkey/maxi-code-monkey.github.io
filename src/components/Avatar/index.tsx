import React from 'react';
import { Avatar, useTheme } from '@mui/material';

interface Props {
  alt?: string;
};

const WeatherAvatar = ({
  alt,
}: Props) => {
  const theme = useTheme();

  return (
    <Avatar
      alt={alt}
      variant="rounded"
      sx={{ backgroundColor: theme.palette.secondary.main }}
     >
        MG
    </Avatar>
  )
};

export default WeatherAvatar;