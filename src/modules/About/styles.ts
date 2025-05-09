import { SxProps, Theme } from '@mui/material';

type Key = 'sectionContainer' | 'message' | 'textContainer';

export const styles: Record<Key, SxProps<Theme>> = {
  sectionContainer: (theme: Theme) => ({
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '0 1rem',
  }),
  message: (theme: Theme) => ({
    padding: '0 30px 20px 30px',
    lineHeight: '1.3',
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }),
  textContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
};