import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          background: 'rgba(0, 0, 0, 0.2)',
          padding: theme.spacing(3),
          color: theme.palette.custom.fonts.fontOne,
          '& .footer__closing--container': {
            '& a': {
              color: theme.palette.custom.fonts.highlight,
            },
          },
          '& .MuiDivider-root': {
            margin: theme.spacing(4, 0),
          },
          '& p': {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
          },
          '& .footer__closing--text': {
            color: theme.palette.custom.fonts.fontThree,
          },
          '& .footer__links': {
            marginTop: '1rem',
          },
          '& h3': {
            color: theme.palette.custom.fonts.fontOne,
            fontSize: '15px',
            fontWeight: 600,
            lineHeight: '20px',
            marginBottom: theme.spacing(1),
          },
          '& .links__group': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            '& a': {
              marginBottom: theme.spacing(1),
              fontSize: '15px',
              lineHeight: '24px',
              opacity: '0.6',
              color: 'inherit',
              textDecoration: 'none',
              borderBottom: `solid 1px ${theme.palette.custom.fonts.fontFour}`,
              transition: '0.2s',
              width: '100%',
              '&:hover': {
                opacity: '1',
              },
            },
            '&.forbole': {
              '& a:last-child': {
                paddingBottom: '0',
                borderBottom: 'none',
              },
            },
            '&.media': {
              display: 'none',
            },
            [theme.breakpoints.up('lg')]: {
              '& a': {
                borderBottom: 'none',
                padding: 0,
                width: 'auto',
              },
              '&.media': {
                display: 'grid',
              },
            },
          },
          [theme.breakpoints.up('md')]: {
            paddingBottom: 0,
            '& .MuiDivider-root': {
              marginBottom: 0,
            },
            '& .footer__closing--container': {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: theme.spacing(1, 0),
            },
          },
          [theme.breakpoints.up('lg')]: {
            '& .MuiDivider-root': {
              marginTop: theme.spacing(5),
            },
            '& .footer': {
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
            },
            '& .footer__links': {
              gridColumn: '1/5',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              marginTop: 0,
            },
            '& .footer__social': {
              justifyContent: 'flex-end',
            },
          },
        },
      });
    },
  )();

  return styles;
};
