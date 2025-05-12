import { SxProps, Theme } from '@mui/material';

type Key = 'sectionContainer' | 'name' | 'workTitle' | 'description' | 'avatarContainer' | 'avatar' | 'link' | 'linksContainer' | 'contentContainer';

export const styles: Record<Key, SxProps<Theme>> = {
  sectionContainer: () => ({
    textAlign: 'left',
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row-reverse', md: 'column' },
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
  }),
  avatarContainer: (theme: Theme) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  }),
  avatar: {
    minWidth: '150px',
    minHeight: '150px',
    margin: '20px 80px 40px',
  },
  name: (theme: Theme) => ({
    padding: '0.5rem 0',
    textAlign: 'left',
    fontSize: '3rem !important',
    fontWeight: 'bold',
    color: theme.palette.text.disabled,
  }),
  description: (theme: Theme) => ({
    padding: '0.5rem 0',
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }),
  workTitle: (theme: Theme) => ({
    padding: '0.5rem 0',
    fontSize: '1.5rem !important',
    textAlign: 'left',
    color: theme.palette.text.primary,
  }),
  linksContainer: {
    display: 'flex',
    gap: '1rem',
    marginTop: 'auto',
  },
  contentContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  link: (theme: Theme) => ({
    height: '2rem',
    width: '2rem',
    padding: '0px',
    margin: '22px 0',
    'a svg': {
      fill: theme.palette.text.secondary,
      '&:hover': {
        fill: theme.palette.text.disabled,
      }
    },
  }),
};