import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        icon: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&:hover': {
            cursor: 'pointer',
          },
          '& svg': {
            fill: theme.palette.custom.fonts.fontOne,
            '& path': {
              fill: theme.palette.custom.fonts.fontOne,
            },
          },
        },
        closeButton: {
          position: 'absolute',
          right: theme.spacing(1),
          top: theme.spacing(1),
          color: theme.palette.grey[500],
        },
        header: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          '& .MuiIconButton-root': {
            padding: 0,
          },
        },
        title: {
          display: 'flex',
          alignItems: 'center',
        },
        dialog: {
          '& .MuiDialog-paper': {
            width: '500px',
          },
          '& .MuiDialogActions-root': {
            justifyContent: 'center',
            padding: theme.spacing(0, 0, 2),

            '& .MuiButtonBase-root': {
              background: theme.palette.primary.main,
              color: theme.palette.custom.fonts.fontOne,
            },
          },
        },
        formItem: {
          marginBottom: theme.spacing(2),
          '& .MuiOutlinedInput-root': {
            width: '100%',
          },
          '& .form-item--label': {
            fontWeight: 700,
            color: theme.palette.custom.fonts.fontTwo,
            marginBottom: theme.spacing(1),
          },
        },
      });
    },
  )();

  return styles;
};
