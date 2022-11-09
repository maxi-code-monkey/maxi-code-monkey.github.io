import React from 'react';
import { Typography, Button, Link } from '@mui/material'
import { Variant } from '@mui/material/styles/createTypography';

interface Props {
  text: string;
  typographyVariant?: Variant;
  buttonVariant?: 'outlined' | 'contained';
  isALink?: boolean;
  linkHref?: string;
};

const BodyButton = ({
  text,
  typographyVariant = "body1",
  buttonVariant = "outlined",
  isALink = false,
  linkHref
}: Props) => isALink && linkHref && linkHref?.length > 0 ? (
  <Link href={linkHref} underline="none">
    <Button sx={{ textTransform: 'none', padding: '20px', marginRight: '25px', marginBottom: '25px' }} variant={buttonVariant} color="secondary">
      <Typography variant={typographyVariant}>
        {text}
      </Typography>
    </Button> 
  </Link>
) : (
  <Button sx={{ textTransform: 'none', padding: '20px', marginRight: '25px', marginBottom: '25px' }} variant={buttonVariant} color="secondary">
    <Typography variant={typographyVariant}>
      {text}
    </Typography>
  </Button>
);

export default BodyButton;