import { SxProps, Theme } from '@mui/material';

type Key = 'sectionContainer' | 'tabSectionContainer' | 'tab';

export const styles: Record<Key, SxProps<Theme>> = {
  sectionContainer: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: { xs: '20px 0', sm: '0 20px' }
  },
  tabSectionContainer: (theme: Theme) => ({
    flexGrow: '1',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: 'auto',
    flexDirection: 'column',
    [theme.breakpoints.up("sm")]: {
      flexDirection: 'row',
    }
  }),
  tab: (theme: Theme) => ({
    color: theme.palette.text.secondary,
    '&.Mui-selected': {
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.text.disabled,
    },
  })
};