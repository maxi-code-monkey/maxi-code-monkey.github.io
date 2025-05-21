import { SxProps, Theme } from '@mui/material';

type Key = 'cardContainer' | 'years' | 'position' | 'descParagraph' | 'pillsContainer' | 'rightColumn' | 'cardContainerWithPointer';

const defaultCardStyling: SxProps<Theme> = (theme: Theme) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: '0.5rem',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '1.5rem',
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
  pillsContainer: () => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    height: 0,
    visibility: 'hidden',
    opacity: 0,
    transition: 'visibility 0s, opacity 0.75s linear',
    '&.hovered': {
      visibility: 'visible',
      opacity: 1,
      height: 'auto',
    }
  }),
  rightColumn: () => ({
    paddingTop: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }),
};