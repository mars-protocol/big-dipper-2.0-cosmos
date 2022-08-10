import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          margin: theme.spacing(1, 0),
          display: 'flex',
          flex: '0 0 100%',
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignItems: 'center',

          '& a.media': {
            width: '30px',
            margin: theme.spacing(1.5, 3, 0, 0),
            border: 'none',

            '&:first-child': {
              marginLeft: 0,
            },
            '&:last-child': {
              marginRight: 0,
            },
            '& path': {
              transition: 'opacity 0.3s ease',
              fill: theme.palette.custom.fonts.fontOne,
              opacity: 0.6,
            },
            '&:hover': {
              '& path': {
                opacity: 1,
              },
            },
          },
        },
      });
    },
  )();

  return styles;
};
