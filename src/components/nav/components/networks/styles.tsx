import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        networkList: {
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          '& img': {
            width: '25px',
            marginRight: theme.spacing(2),
          },
          '& .network': {
            flex: 1,
            minWidth: 0,
          },
        },
        network: {
          padding: theme.spacing(1),
          display: 'flex',
          alignItems: 'start',
          width: '100%',
          borderRadius: theme.spacing(1),
          cursor: 'pointer',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.1)',
          },
        },
        content: {
          padding: theme.spacing(1, 0),
          display: 'flex',
          flexDirection: 'column',
          gridGap: theme.spacing(2),
          gap: theme.spacing(2),
        },
        image: {
          margin: '4px 0 0 0',
          width: '20px',
          height: '20px',
        },
        copy: {
          margin: theme.spacing(0, 0, 0, 2),
        },
        label: {
          marginBottom: theme.spacing(0.5),
          fontSize: '16.88px',
          lineHeight: '24px',
          letterSpacing: '3px',
          color: theme.palette.custom.fonts.fontOne,
          fontWeight: 600,
          textTransform: 'uppercase',
        },
        description: {
          color: 'rgba(255, 255, 255, 0.4)',
        },
      });
    },
  )();

  return styles;
};
