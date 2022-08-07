import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          padding: theme.spacing(0.25, 2),
          color: theme.palette.custom.fonts.fontOne,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(68, 11, 55, 0.7)',
          border: '1px solid rgba(255, 255, 255, 0.6)',
          borderRadius: '20px',
          height: '31px',
          '&:hover': {
            cursor: 'pointer',
            borderColor: 'rgba(255, 255, 255, 1)',
            background: '#440b37',
          },
          '& .MuiTypography-body1': {
            lineHeight: '20px',
          },
          '& .MuiSvgIcon-root': {
            marginLeft: theme.spacing(1),
          },
        },
        icon: {
          width: 17,
          marginRight: theme.spacing(1),
        },
      });
    },
  )();

  return styles;
};
