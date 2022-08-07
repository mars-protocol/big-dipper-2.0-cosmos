import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      const OPEN_DRAWER_WIDTH = 191;
      const CLOSED_DRAWER_WIDTH = 59;
      const OPEN_DRAWER_MARGIN = 141;

      return ({
        chevron: {
          width: '34px',
          margin: '0 0 0 7px',
          padding: theme.spacing(2, 1),
          fill: 'none',
          transformOrigin: 'center',
          alignSelf: 'flex-end',
          transition: 'all .5s',
          '.open &': {
            transform: 'rotate(180deg)',
          },
          '& path': {
            fill: theme.palette.custom.fonts.fontOne,
          },
          '&:hover': {
            cursor: 'pointer',
          },
        },
        appBar: {
          ...theme.mixins.toolbar,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          background: 'transparent',
          color: theme?.palette?.custom?.fonts?.fontTwo ?? 'inherit',
          width: '100%',
          zIndex: theme.zIndex.drawer + 1,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.enteringScreen,
          }),
          '& svg': {
            fill: theme?.palette?.custom?.fonts?.fontOne,
            '& path': {
              fill: `${theme?.palette?.custom?.fonts?.fontOne} !important`,
            },
          },
          '&.MuiPaper-elevation4': {
            boxShadow: 'none',
          },
          '&.open': {
            width: `calc(100% - ${OPEN_DRAWER_MARGIN}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.easeIn,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
        },
        drawer: {
          width: OPEN_DRAWER_WIDTH,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          paddingLeft: theme.spacing(2),
          boxSizing: 'border-box',
        },
        drawerOpen: {
          width: OPEN_DRAWER_WIDTH,
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
        drawerClose: {
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.enteringScreen,
          }),
          overflowX: 'hidden',
          width: CLOSED_DRAWER_WIDTH,
        },
      });
    },
  )();

  return styles;
};
