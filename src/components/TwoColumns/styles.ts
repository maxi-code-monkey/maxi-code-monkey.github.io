import { SxProps, Theme } from '@mui/material';

type Key = 'twoColumnsContainer' | 'leftColumn' | 'rightColumn'; 

export const styles: Record<Key, SxProps<Theme>> = {
  twoColumnsContainer: () => ({
    backgroundImage: `url("https://img.freepik.com/premium-vector/blue-polygon-dark-background-square-social-template-vector_53876-170115.jpg?semt=ais_hybrid&w=740")`,
    // https://img.freepik.com/free-vector/futuristic-background-with-lines_23-2148487905.jpg?semt=ais_hybrid&w=740
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    overflow: 'hidden',
    paddingBottom: '2rem',
  }),
  leftColumn: (theme) => ({
    width: { xs: '100%', md: '30%' },
    padding: '2rem 1.5rem',
    [theme.breakpoints.down('md')]: {
      paddingBottom: '0'
    }
  }),
  rightColumn: (theme: Theme) => ({
    width: { xs: '100%', md: '70%' },
    padding: { xs: '1rem', md: '2rem 5rem', lg: '2rem 6rem' },
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    [theme.breakpoints.up('md')]: {
      '.about-container': {
        marginBottom: '4.5rem'
      }
    }
  }),
};