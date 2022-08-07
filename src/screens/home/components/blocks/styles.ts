import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          display: 'flex',
          flexDirection: 'column',
          '& .button': {
            '&:hover': {
              textDecoration: 'underline',
              cursor: 'pointer',
            },
          },
        },
        label: {
          marginBottom: theme.spacing(2),
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'flex-end',
        },
        seeMoreFooter: {
          paddingTop: theme.spacing(2),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        mobile: {
          [theme.breakpoints.up('lg')]: {
            display: 'none',
          },
        },
        desktop: {
          display: 'none',
          [theme.breakpoints.up('lg')]: {
            display: 'block',
          },
        },
      });
    },
  )();

  return styles;
};
