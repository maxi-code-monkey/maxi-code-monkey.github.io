import { SxProps, Theme } from '@mui/material';
import { ButtonVariant } from '.';

type Key = 'button';

export const styles: Record<Key, Record<ButtonVariant, SxProps<Theme>>> = {
  button: {
    'SMALL': {
      textTransform: 'none',
      padding: '10px',
      'p': {
        fontSize: '1rem',
      }
    },
    'BIG': {
      textTransform: 'none',
      marginRight: '25px',
      marginBottom: '25px',
      padding: '20px',
    }
  }
};