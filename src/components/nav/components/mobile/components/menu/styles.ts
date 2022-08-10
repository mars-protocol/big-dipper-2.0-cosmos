import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          background: 'linear-gradient(132.82deg, rgba(11, 14, 32, 1) 5.03%, rgba(52, 20, 33, 1) 73.08%)',
          display: 'flex',
          flexDirection: 'column',
        },
        menu: {
          flex: '1',
        },
        footerActions: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '1rem',
        },
        language: {
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          '& .MuiTypography-caption': {
            margin: '0 0.3rem',
          },
          '& svg': {
            margin: theme.spacing(0, 1, 0, 0),
            '& path': {
              fill: theme.palette.custom.general.icon,
            },
          },
        },
        theme: {
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          '& svg': {
            width: theme.spacing(3),
            height: theme.spacing(3),
          },
          '& .MuiTypography-caption': {
            margin: '0 0.3rem',
          },
        },
        drawer: {
          background: Color(theme.palette.background.default).alpha(0.5).string(),
        },
      });
    },
  )();

  return styles;
};
