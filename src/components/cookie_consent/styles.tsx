import { makeStyles } from '@material-ui/core/styles'

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return {
      root: {
        '& .cookie_consent': {
          position: 'fixed',
          bottom: '0',
          width: '100%',
          left: '0',
          padding: '16px 24px',
          background: 'rgba(0, 0, 0, 0.7)',
          zIndex: '100',
          '& .body': {
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            [theme.breakpoints.up('md')]: {
              flexWrap: 'nowrap',
            },
          },
          '& .info': {
            flexBasis: '100%',
            fontSize: '15px',
            lineHeight: '24px',
            color: theme.palette.common.white,
            '& a': {
              color: theme.palette.primary.main,
              textDecoration: 'none',

              '&:hover, &:focus, &:active': {
                color: theme.palette.primary.light,
                textDecoration: 'underline',
              },
            },
          },
          '& button': {
            appearance: 'none',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            fontSize: '13px',
            fontWeight: '400',
            height: '32px',
            lineHeight: '20px',
            padding: '6px 20px',
            borderRadius: '16px',
            border: 'none',
            outline: 'none',
            '&:hover, &:focus, &:active': {
              backgroundColor: theme.palette.primary.light,
            },
          },
        },
      },
    }
  })()
  return styles
}
