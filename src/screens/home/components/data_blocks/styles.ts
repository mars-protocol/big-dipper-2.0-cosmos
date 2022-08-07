import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          display: 'grid',
          gridGap: theme.spacing(1),
          gridTemplateRows: 'auto',
          [theme.breakpoints.up('sm')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
          },
          [theme.breakpoints.up('lg')]: {
            gridGap: theme.spacing(4),
            gridTemplateColumns: 'repeat(4, 1fr)',
          },
        },
        blockTime: {
          background: theme.palette.background.paper,
          '& .label': {
            marginBottom: theme.spacing(1),
          },
        },
        price: {
          background: theme.palette.background.paper,
          '& .label': {
            marginBottom: theme.spacing(1),
          },
        },
        validators: {
          background: theme.palette.background.paper,
          '& .label': {
            marginBottom: theme.spacing(1),
          },
        },
        blockHeight: {
          background: theme.palette.background.paper,
          '& .label': {
            marginBottom: theme.spacing(1),
          },
        },
      });
    }, { index: 1 },
  )();

  return styles;
};
