import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        mobile: {
          [theme.breakpoints.up('lg')]: {
            display: 'none',
          },
        },
        desktop: {
          display: 'none',
          [theme.breakpoints.up('lg')]: {
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            flex: '0 0 100%',
            flexWrap: 'wrap',
          },
        },
      });
    },
  )();

  return styles;
};
