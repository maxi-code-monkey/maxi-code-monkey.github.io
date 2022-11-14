import { SxProps, Theme } from '@mui/material';

type Key = 'container' | 'appBar' | 'headerContainer' | 'link' | 'menuOption' | 'resume' | 'avatar' | 'listItem' ;

export const styles: Record<Key, SxProps<Theme>> = {
  container: {
    display: 'flex',
  },
  appBar: (theme: Theme) => ({
    backgroundColor: theme.palette.background.default,
  }),
  headerContainer: {
    display: { xs: 'none', sm: 'flex' },
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: { sm: '90%', md: '100%' },
  },
  menuOption: {
    padding: '0',
    ':first-child': {
      padding: '0 5px',
    }
  },
  link: {
    display: 'flex',
    flexDirection: 'row',
    padding: '0 20px',
  },
  resume: {
    marginLeft: '40px',
    textTransform: 'none',
  },
  avatar: (theme: Theme) => ({
    backgroundColor: theme.palette.secondary.main,
    marginRight: '20px',
  }),
  listItem: {
    padding: '10px 8px'
  },
};