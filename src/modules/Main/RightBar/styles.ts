import { SxProps, Theme } from '@mui/material';

type Key = 'text' | 'link';

export const styles: Record<Key, SxProps<Theme>> = {
  text: (theme: Theme) => ({ 
    '::after': {
      content: '""',
      display: 'block',
      width: '1px',
      height: '90px',
      margin: '0px auto',
      backgroundColor: theme.palette.text.secondary,
    }
  }),
  link: (theme: Theme) => ({
    margin: '22px auto',
    padding: '0 10px',
    letterSpacing: '0.1em',
    writingMode: 'vertical-rl',
    color: theme.palette.text.secondary,
  })
};