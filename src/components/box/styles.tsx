import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          overflow: 'auto',
          padding: theme.spacing(2),
          borderRadius: '16px',
          background: theme.palette.background.paper,
        },
      });
    },
  )();

  return styles;
};
