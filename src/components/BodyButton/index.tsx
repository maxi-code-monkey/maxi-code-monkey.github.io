import React from 'react';
import { Typography, Button, Link } from '@mui/material'
import { Variant } from '@mui/material/styles/createTypography';
import { styles } from './styles';

export type ButtonVariant = 'BIG' | 'SMALL';

interface Props {
  text: string;
  typographyVariant?: Variant;
  buttonVariant?: 'outlined' | 'contained';
  isALink?: boolean;
  linkHref?: string;
  variant?: ButtonVariant;
};

const BodyButton = ({
  text,
  typographyVariant = "body1",
  buttonVariant = "outlined",
  isALink = false,
  linkHref,
  variant = "BIG",
}: Props) => {
  return isALink && linkHref && linkHref?.length > 0 ? (
    <Link href={linkHref} target="_blank" rel="noopener noreferrer" underline="none">
      <Button sx={styles.button[variant]} variant={buttonVariant} color="secondary">
        <Typography variant={typographyVariant}>
          {text}
        </Typography>
      </Button> 
    </Link>
  ) : (
    <Button sx={styles.button[variant]} variant={buttonVariant} color="secondary">
      <Typography variant={typographyVariant}>
        {text}
      </Typography>
    </Button>
  );
}

export default BodyButton;