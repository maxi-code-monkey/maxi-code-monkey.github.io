import { SxProps, Theme } from '@mui/material';

type Key = 'quotesListContainer' | 'quote' | 'selectedQuote' | 'buttonsContainer' | 'avatar'; 

export const styles: Record<Key, SxProps<Theme>> = {
  quotesListContainer: () => ({
    height: '650px',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    position: 'relative',
  }),
  quote: (theme) => ({
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',

    '.left-column': {
      padding: '0 3rem',
      width: '60%',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      justifyContent: 'center',

      ".name-caontainer": {
        display: 'flex',
        flexDirection: 'row',
        'a': {
          display: 'flex',
          cursor: 'pointer',
        }
      },
      ".name": {
        color: theme.palette.text.disabled,
      },
      ".quote": {
        color: theme.palette.text.primary,
      },
      ".position": {
        color: theme.palette.text.secondary,
        textAlign: 'right'
      },
    },
    '.right-column': {
      width: '40%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
  selectedQuote: (theme) => ({
    // minWidth: '100%',
    '&.invisible-quote': {
      visibility: 'hidden',
      opacity: 0,
      transition: 'width 0s, visibility 0s, opacity 0s linear',
      width: 0,
    },
    '&.visible-quote': {
      visibility: 'visible',
      opacity: 1,
      width: '100%',
      minWidth: '100%'
    },
    // width: { xs: '100%', md: '30%' },
    // [theme.breakpoints.down('md')]: {
    //   paddingBottom: '0'
    // }
  }),
  buttonsContainer: (theme: Theme) => ({
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    marginLeft: '3rem',
    justifyContent: 'center',
    padding: '0.5rem',
    bottom: '2rem',
    gap: '1rem',

    'svg': {
      height: '3rem',
      width: '3rem',
      border: `1px solid ${theme.palette.text.secondary}`,
      borderRadius: '50%',
      padding: '0.25rem',
      color: theme.palette.text.secondary
    },
  }),
  avatar: () => ({
    height: '50%',
    width: '100%'
  }),
};