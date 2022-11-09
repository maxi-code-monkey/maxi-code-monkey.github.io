import { SxProps, Theme } from '@mui/material';

type Key = 'listContainer' | 'listItem';

export const styles: Record<Key, SxProps<Theme>> = {
  listContainer: (theme: Theme) => ({
    paddingBottom: '0',
    '::after': {
      content: '""',
      display: 'block',
      width: '1px',
      height: '90px',
      margin: '0px auto',
      backgroundColor: theme.palette.text.secondary,
    }
  }),
  listItem: (theme: Theme) => ({
    height: '40px',
    width: '40px',
    padding: '0px',
    margin: '22px 0',
    'a svg': {
      fill: theme.palette.text.secondary,
    },
  }),
};