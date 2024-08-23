import { SxProps, Theme } from '@mui/material';

type Key = 'pill' | 'label';

export const styles: Record<Key, SxProps<Theme>> = {
  pill: (theme: Theme) => ({
    borderRadius: '2rem',
    fontSize: '0.85rem',
    padding: '0.5rem',
    border: `1px solid ${theme.palette.text.disabled}`,
  }),
  label: (theme: Theme) => ({
    color: theme.palette.text.disabled,
  }),
};