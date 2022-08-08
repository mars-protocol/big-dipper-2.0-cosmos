import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: theme.spacing(3),
        },
        actions: {
          width: '70%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          zIndex: 5000,
        },
        searchBar: {
          flex: 1,
          marginRight: theme.spacing(2),
          '& .MuiSvgIcon-root': {
            fill: theme.palette.custom.fonts.fontOne,
          },
        },
        network: {
          marginRight: theme.spacing(2),
          '&.open': {
            background: theme.palette.background.default,
          },
        },
        networkList: {
          display: 'none',

          '&.open': {
            opacity: 1,
            display: 'block',
          },
        },
      });
    },
  )();

  return styles;
};
