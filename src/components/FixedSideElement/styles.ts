import { SxProps, Theme } from '@mui/material';

type Key = 'left' | 'right';

export const styles: Record<Key, SxProps<Theme>> = {
  left: {
    width: '40px',
    position: 'fixed',
    bottom: '0px',
    left: '40px',
    right: 'auto',
    zIndex: '10',
  },
  right: {
    width: '40px',
    position: 'fixed',
    bottom: '0px',
    left: 'auto',
    right: '40px',
    zIndex: '10',
  },
};