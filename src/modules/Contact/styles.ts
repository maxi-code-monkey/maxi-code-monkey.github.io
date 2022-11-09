import { SxProps, Theme } from '@mui/material';

type Key = 'sectionContainer' | 'message' ;

export const styles: Record<Key, SxProps<Theme>> = {
  sectionContainer: (theme: Theme) => ({
    backgroundColor: theme.palette.background.default,
    minHeight: '600px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  message: (theme: Theme) => ({
    padding: '0 40px 50px 40px',
    lineHeight: '1.3',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: '600px',
    ':first-of-type': {
      paddingBottom: '20px',
    }
  })
};