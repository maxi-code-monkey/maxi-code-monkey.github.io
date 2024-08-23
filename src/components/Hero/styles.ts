import { SxProps, Theme } from '@mui/material';

type Key = 'greeting' | 'heroContainer' | 'name' | 'titleContainer' | 'bio' | 'button'; 

export const styles: Record<Key, SxProps<Theme>> = {
  heroContainer: (theme: Theme) => ({
    backgroundColor: theme.palette.background.default,
    paddingBottom: '2rem'
  }),
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    maxWidth: '1000px',
    margin: '0 auto',
    paddingBlockStart: { xs: '50px' }
  },
  greeting: (theme: Theme) => ({
    color: theme.palette.text.disabled,
    margin: { xs: '20px auto 20px 0', md: '20px auto 30px 0' },
  }),
  name: (theme: Theme) => ({
    margin: { xs: '20px auto 20px 0', md: '20px auto 30px 0' },
    color: theme.palette.text.primary,
  }),
  bio: (theme: Theme) => ({
    marginBottom: '30px',
    color: theme.palette.text.secondary,
    maxWidth: { xs: '90%', sm: '60%' },
  }),
  button: {
    padding: '20px',
    textTransform: 'none',
  },
};