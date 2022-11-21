import { SxProps, Theme } from '@mui/material';

type Key = 'sectionContainer' | 'message' | 'textContainer' | 'avatarContainer' | 'avatar';

export const styles: Record<Key, SxProps<Theme>> = {
  sectionContainer: (theme: Theme) => ({
    backgroundColor: theme.palette.background.default,
    minHeight: '600px',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down("sm")]: {
      paddingBlockStart: '100px'
    },
  }),
  message: (theme: Theme) => ({
    padding: '0 30px 20px 30px',
    lineHeight: '1.3',
    textAlign: 'left',
    color: theme.palette.text.secondary,
    maxWidth: '600px',
  }),
  textContainer: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' }
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    minWidth: { xs: '250px', md: '350px' },
    minHeight: { xs: '250px', md: '350px' },
    margin: '20px 80px 40px',
  }
};