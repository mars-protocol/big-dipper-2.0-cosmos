import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';

export const useStyles = (percentage: number, topVotingPower:boolean) => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          '& .MuiTypography-body1': {
            color: (
              topVotingPower
                ? theme.palette.custom.fonts.fontFour
                : theme.palette.custom.fonts.fontTwo
            ),
          },
        },
        chart: {
          display: 'flex',
          height: '2px',
          borderRadius: '16px',
          background: (
            topVotingPower
              ? Color(theme.palette.custom.fonts.fontFour).alpha(0.2).string()
              : Color(theme.palette.custom.primaryData.one).alpha(0.2).string()
          ),
          overflow: 'hidden',
        },
        active: {
          width: `${percentage}%`,
          background: (
            topVotingPower
              ? theme.palette.custom.fonts.fontFour
              : theme.palette.custom.primaryData.one
          ),
        },
        content: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: theme.spacing(1),
          '& .percentage': {
            color: (
              topVotingPower
                ? theme.palette.custom.fonts.fontFour
                : theme.palette.custom.primaryData.one
            ),
          },
          [theme.breakpoints.up('lg')]: {
            marginBottom: 0,
          },
        },
      });
    },
  )();

  return styles;
};
