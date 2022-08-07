import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          '& .MuiTypography-h2': {
            marginBottom: theme.spacing(2),
          },
        },
        blocks: {
          display: 'flex',
          flexWrap: 'wrap',
          margin: theme.spacing(-0.25),
        },
        singleBlock: {
          width: '28px',
          height: '28px',
          borderRadius: '2px',
          background: theme.palette.custom.general.surfaceTwo,
          margin: theme.spacing(0.25),
          '&:hover': {
            background: Color(theme.palette.custom.tags.zero).alpha(0.5).string(),
          },
          '&.signed': {
            background: theme.palette.primary.main,
            '&:hover': {
              background: Color(theme.palette.primary.main).alpha(0.5).string(),
            },
          },
          [theme.breakpoints.up('md')]: {
            width: '32px',
            height: '32px',
          },
          [theme.breakpoints.up('lg')]: {
            width: '25px',
            height: '25px',
          },
        },
        toolTip: {
          padding: '8px, 16px',
          boxShadow: '0 3px 4px rgba(0, 0, 0, 0.14), 0 6px 30px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.2)',
          borderRadius: '12px',
          background: 'linear-gradient(77.47deg, rgba(20, 24, 57, 0.9) 11.58%, rgba(34, 16, 57, 0.9) 93.89%)',
        },
        item: {
          marginBottom: theme.spacing(2),
          '& .label': {
            marginBottom: theme.spacing(1),
            color: theme.palette.custom.fonts.fontTwo,
          },
          '& p.value': {
            color: theme.palette.custom.fonts.fontOne,
          },
          '& a': {
            color: theme.palette.custom.fonts.highlight,
          },
        },
        flex: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          '& > div': {
            width: '50%',
          },
        },
      });
    }, { index: 1 },
  )();

  return styles;
};
