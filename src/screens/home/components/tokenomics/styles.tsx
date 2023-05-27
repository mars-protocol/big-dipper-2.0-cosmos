import {
  makeStyles, useTheme,
} from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return {
      root: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      },
      label: {
        marginBottom: theme.spacing(4),
      },
      data: {
        display: 'flex',
        flexWrap: 'wrap',
        '& .data__item': {
          width: '50%',
          whiteSpace: 'pre-wrap',
          '& .MuiTypography-caption': {
            fontStyle: 'italic',
            fontWeight: 400,
            opacity: 0.3,
          },
          '& .MuiTypography-h4': {
            marginBottom: theme.spacing(1),
          },
          '& .MuiTypography-h5': {
            marginBottom: theme.spacing(1),
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: '0.75rem',
            opacity: 0.6,
          },
        },
      },
      legends: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: theme.spacing(2),
        flexWrap: 'wrap',
        width: '100%',
        '& .MuiTypography-caption': {
          color: theme.palette.custom.fonts.fontThree,
        },
        '& .legends__item': {
          width: '100%',
          [theme.breakpoints.up('lg')]: {
            width: '50%',
          },
          '&:before': {
            content: '""',
            display: 'inline-block',
            width: '12px',
            height: '12px',
            marginRight: '5px',
          },
          '&:first-child:before': {
            background: theme.palette.custom.tokenomics.one,
          },
          '&:nth-child(2):before': {
            background: theme.palette.custom.tokenomics.two,
          },
          '&:nth-child(3):before': {
            background: theme.palette.custom.tokenomics.three,
          },
          '&:nth-child(4):before': {
            background: theme.palette.custom.tokenomics.four,
          },
          '&:nth-child(5):before': {
            background: theme.palette.custom.tokenomics.five,
          },
          '&:nth-child(6):before': {
            background: theme.palette.custom.tokenomics.six,
          },
          '& .caption__percent': {
            color: theme.palette.custom.fonts.fontThree,
          },
        },
      },
      content: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
      },
    };
  })();

  return {
    classes: styles,
    theme: useTheme(),
  };
};
