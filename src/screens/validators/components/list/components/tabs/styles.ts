import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        searchBar: {
          display: 'none',
          [theme.breakpoints.up('lg')]: {
            display: 'block',
            width: '300px',
            '& .MuiInputBase-root': {
              width: '100%',
              background: 'rgba(0, 0, 0, 0.3)',
              padding: theme.spacing(0.4, 1.2),
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            },
            '& .MuiSvgIcon-root': {
              fill: theme.palette.custom.fonts.fontOne,
            },
            '& .MuiInputBase-input': {
              textOverflow: 'ellipsis',
              '&::placeholder': {
                color: theme.palette.custom.fonts.fontTwo,
              },
            },
          },
        },
      });
    }, { index: 1 },
  )();

  return styles;
};
