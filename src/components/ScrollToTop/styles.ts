import { SxProps, Theme } from '@mui/material';

type Key = 'container' | 'fab' | 'icon';

export const styles: Record<Key, SxProps<Theme>> = {
  container: {
    position: 'fixed',
    bottom: '16px',
    right: '50%',
  },
  fab: (theme: Theme) => ({
    backgroundColor: theme.palette.background.default,
    '&:hover': {
      backgroundColor: theme.palette.background.default,
    }
  }),
  icon: (theme: Theme) => ({
    color: theme.palette.text.disabled,
  }),
};