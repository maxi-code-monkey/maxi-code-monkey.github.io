import { SxProps, Theme } from '@mui/material';

type Key = 'sectionContainer' | 'experienceContainer';

export const styles: Record<Key, SxProps<Theme>> = {
  sectionContainer: (theme: Theme) => ({
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingBlockStart: '100px',
    paddingRight: '1.5rem'
  }),
  experienceContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  }
};