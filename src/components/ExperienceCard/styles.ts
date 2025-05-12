import { SxProps, Theme } from '@mui/material';

type Key = 'cardContainer' | 'leftColumn' | 'years' | 'position' | 'descParagraph' | 'pillsContainer' | 'rightColumn' | 'cardContainerWithPointer';

const defaultCardStyling: SxProps<Theme> = (theme: Theme) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: '0.5rem',
  height: '100%',
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  padding: '0.5rem',
  transition: `${theme.transitions.create(['transform'], {
    duration: theme.transitions.duration.standard,
  })}`,
  '&:hover': {
    border: `0.5px solid ${theme.palette.text.secondary}`,
    transform: 'scale(1.2)',
  }
});

export const styles: Record<Key, SxProps<Theme>> = {
  cardContainer: (theme: Theme) => ({
    ...defaultCardStyling(theme),
  }),
  cardContainerWithPointer: (theme: Theme) => ({
    ...defaultCardStyling(theme),
    cursor: 'pointer',
  }),
  leftColumn: {
    width: { xs: '100%', sm: '30%' },
    padding: '2rem 0.5rem',
  },
  years: (theme: Theme) => ({
    fontSize: '1rem',
    color: theme.palette.text.secondary
  }),
  position: (theme: Theme) => ({
    color: theme.palette.text.primary
  }),
  descParagraph: (theme: Theme) => ({
    color: theme.palette.text.secondary,
    fontSize: '1rem'
  }),
  pillsContainer: (theme: Theme) => ({
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }),
  rightColumn: (theme: Theme) => ({
    width: { xs: '100%', sm: '70%' },
    padding: { xs: '2rem 1rem', md: '2rem 0' },
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }),
};