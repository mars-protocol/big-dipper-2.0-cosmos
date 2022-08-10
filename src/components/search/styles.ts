import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          '& .MuiInputBase-root': {
            width: '100%',
            background: 'rgba(0, 0, 0, 0.2)',
            padding: theme.spacing(0.4, 1.2),
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            [theme.breakpoints.up('lg')]: {
              background: theme.palette.background.paper,
            },
          },
          '& .MuiInputBase-input': {
            textOverflow: 'ellipsis',
            '&::placeholder': {
              color: theme.palette.custom.fonts.fontTwo,
            },
          },
        },
      });
    },
  )();

  return styles;
};
