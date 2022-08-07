import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          '& .MuiListItemIcon-root': {
            minWidth: '48px',
          },
          '&.MuiListItem-gutters': {
            padding: theme.spacing(2, 2.25),
          },
          '& .MuiListItemText-root': {
            color: theme.palette.custom.general.icon,
          },
          '&.active': {
            background: 'rgba(0, 0, 0, 0.4)',
            '& .MuiListItemIcon-root': {
              '& svg': {
                fill: theme?.palette?.primary?.main,
              },
            },
            '& .MuiListItemText-root': {
              color: theme.palette.primary.main,
            },
          },
        },
      });
    }, { index: 1 },
  )();

  return styles;
};
