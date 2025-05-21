import { SxProps, Theme } from '@mui/material';

type Key = 'sectionContainer';

export const styles: Record<Key, SxProps<Theme>> = {
  sectionContainer: () => ({
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingBlockStart: '100px',
    paddingRight: '1.5rem'
  }),
};