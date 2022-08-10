import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      const iconFill = theme.palette.type === 'light' ? theme.palette.custom.fonts.fontTwo : theme.palette.custom.general.icon;
      return ({
        root: {
          margin: theme.spacing(1, 0),
          display: 'flex',
          flex: '0 0 100%',
          flexWrap: 'nowrap',
          flexDirection: 'row',
          alignItems: 'center',

          '& a.media': {
            width: '30px',
            margin: theme.spacing(0, 1.5),
            '&:first-child': {
              marginLeft: 0,
            },
            '&:last-child': {
              marginRight: 0,
            },
            '& path': {
              transition: 'all 0.3s ease',
              fill: iconFill,
            },
            '&:hover': {
              '& path': {
                fill: theme.palette.custom.fonts.fontOne,
              },
            },
          },
        },
      });
    },
  )();

  return styles;
};
