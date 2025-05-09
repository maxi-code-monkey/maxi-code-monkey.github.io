import { SxProps, Theme } from '@mui/material';

type Key = 'twoColumnsContainer' | 'leftColumn' | 'rightColumn'; 

export const styles: Record<Key, SxProps<Theme>> = {
  twoColumnsContainer: (theme: Theme) => ({
    backgroundImage: `url("https://img.freepik.com/premium-vector/blue-polygon-dark-background-square-social-template-vector_53876-170115.jpg?semt=ais_hybrid&w=740")`,
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    overflow: 'hidden',
    paddingBottom: '2rem',
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