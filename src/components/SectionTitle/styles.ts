import { SxProps, Theme } from '@mui/material';

type Key = 'name' | 'container';

export const styles: Record<Key, SxProps<Theme>> = {
  name: (theme: Theme) => ({
    color: theme.palette.text.primary
  }),
  container: {
    display: 'flex',
    margin: '10px 0 40px',
  }
};