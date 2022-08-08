import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
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
        content: {
          padding: theme.spacing(1, 0),
          display: 'flex',
          flexDirection: 'column',
          gridGap: theme.spacing(2),
          gap: theme.spacing(2),
        },
        network: {
          padding: theme.spacing(1),
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          borderRadius: theme.spacing(1),
          cursor: 'pointer',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.1)',
          },
        },
        image: {
          width: '60px', height: '60px',
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
