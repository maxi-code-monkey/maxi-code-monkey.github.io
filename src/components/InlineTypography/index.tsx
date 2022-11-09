import React from 'react';
import { Variant } from '@mui/material/styles/createTypography'
import { Typography } from '@mui/material';

interface Props {
  text: string;
  variant?: Variant;
  color?: "primary" | "secondary";
};

const InlineTypography = ({
  text,
  variant = "body1",
  color = "secondary"
}: Props) => (
  <Typography color={color} variant={variant} sx={{ display: 'contents' }}>
    {text}
  </Typography>
);

export default InlineTypography;