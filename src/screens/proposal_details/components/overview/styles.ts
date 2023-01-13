import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          '& .label': {
            color: theme.palette.custom.fonts.fontThree,
          },
        },
        content: {
          marginTop: theme.spacing(2),
          display: 'grid',
          '& > *': {
            marginBottom: theme.spacing(1),
            [theme.breakpoints.up('lg')]: {
              marginBottom: theme.spacing(2),
            },
          },
          [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: '200px auto',
          },
        },
        time: {
          marginTop: theme.spacing(2),
          display: 'grid',
          '& > *': {
            marginBottom: theme.spacing(1),
            [theme.breakpoints.up('md')]: {
              marginBottom: theme.spacing(2),
            },
          },
          [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
          },
        },
        pre: {
          maxHeight: '400px',
          overflow: 'auto',
          padding: '1rem',
          margin: '0',
          background: theme.palette.background.default,
          flex: 1,
          '& code': {
            whiteSpace: 'pre-wrap',
          },
        },
      });
    },
  )();

  return styles;
};
