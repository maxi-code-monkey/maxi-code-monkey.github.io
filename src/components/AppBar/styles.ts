import { SxProps, Theme } from '@mui/material';

type Key = 'link' | 'menuOption' | 'toolbar' | 'resume' | 'avatar' | 'appBar';

export const styles: Record<Key, SxProps<Theme>> = {
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
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  resume: {
    marginLeft: '40px',
    textTransform: 'none',
  },
  avatar: (theme: Theme) => ({
    backgroundColor: theme.palette.secondary.main,
    marginRight: '20px',
  }),
  appBar: (theme: Theme) => ({
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  })
};