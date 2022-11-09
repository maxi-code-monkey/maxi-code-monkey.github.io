import { SxProps, Theme } from '@mui/material';

type Key = 'sectionContainer' | 'message' | 'textContainer';

export const styles: Record<Key, SxProps<Theme>> = {
  sectionContainer: (theme: Theme) => ({
    backgroundColor: theme.palette.background.default,
    minHeight: '750px',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBlockStart: '100px',
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
};