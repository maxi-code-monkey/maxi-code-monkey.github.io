import { SxProps, Theme } from '@mui/material';

type Key = 'twoColumnsContainer' | 'leftColumn' | 'rightColumn'; 

export const styles: Record<Key, SxProps<Theme>> = {
  twoColumnsContainer: (theme: Theme) => ({
    backgroundColor: theme.palette.background.default,
    height: '800px',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    overflow: 'hidden'
  }),
  leftColumn: {
    width: { xs: '100%', md: '40%' },
    padding: '2rem 1.5rem',
  },
  rightColumn: (theme: Theme) => ({
    width: { xs: '100%', md: '60%' },
    padding: { xs: '2rem 1rem', md: '2rem 0' },
    height: '100%',
    overflow: 'auto',
  }),
};