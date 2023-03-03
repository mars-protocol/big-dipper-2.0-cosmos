import { Typography } from '@material-ui/core';
import { useGetBalances } from '@src/hooks/use_get_balance';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import React, {
  useEffect, useState,
} from 'react';
import { useOnlineVotingPower } from './hooks';
import { useStyles } from './styles';

const OnlineVotingPower: React.FC<ComponentDefault> = () => {
  const { t } = useTranslation('home');
  const { state } = useOnlineVotingPower();

  const vestingBalances = useGetBalances(
    'mars14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9smxjtde',
  );
  const [vesting, setVesting] = useState<number | undefined>();
  useEffect(() => {
    const vestingResult = async () => {
      const vestingInfo = await vestingBalances;
      const vestingValue = Number(vestingInfo) / 1000000;
      setVesting(vestingValue);
    };

    if (!vesting) vestingResult();
  }, [vestingBalances]);

  const genesisStake = 25000000;

  const isVotingPowerPercentHigherThan100 = state.votingPower / state.totalVotingPower > 1;
  const votingPowerPercent = isVotingPowerPercentHigherThan100
    ? numeral(100)
    : numeral((state.votingPower / state.totalVotingPower) * 100);

  const classes = useStyles(votingPowerPercent.format(0));

  return (
    <div className={classes.root}>
      <Typography variant="h2">{t('onlineVotingPower')}</Typography>
      <div className={classes.data}>
        <Typography variant="h3" className="primary__data">
          {`${votingPowerPercent.format('0,0.00', (n) => ~~n)}%`}
        </Typography>
        <Typography variant="body1">
          {numeral(state.votingPower + vesting).format('0,0')}
          {' '}
          /
          {' '}
          {numeral(state.totalVotingPower + vesting).format('0,0')}
        </Typography>
      </div>
      <div className={classes.chart}>
        <div className={classes.active} />
      </div>
      <div className={classes.itemsContainer}>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('validators')}
          </Typography>
          <Typography variant="body1" className="value">
            {numeral(state.activeValidators).format('0,0')}
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('votingPowerPercent')}
          </Typography>
          <Typography variant="body1" className="value">
            {`${votingPowerPercent.format('0,0.00', (n) => ~~n)}%`}
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('vesting')}
          </Typography>
          <Typography variant="body1" className="value">
            {numeral(vesting).format('0,0')}
          </Typography>
        </div>
        {state.votingPower > genesisStake ? (
          <>
            <div className={classes.item}>
              <Typography variant="h4" className="label">
                {t('genesisStake')}
              </Typography>
              <Typography variant="body1" className="value">
                {numeral(genesisStake).format('0,0')}
              </Typography>
            </div>
            <div className={classes.item}>
              <Typography variant="h4" className="label">
                {t('bonded')}
              </Typography>
              <Typography variant="body1" className="value">
                {numeral(state.votingPower - genesisStake).format('0,0')}
              </Typography>
            </div>
          </>
        ) : (
          <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('staked')}
            </Typography>
            <Typography variant="body1" className="value">
              {numeral(state.votingPower).format('0,0')}
            </Typography>
          </div>
        )}

        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('totalVotingPower')}
          </Typography>
          <Typography variant="body1" className="value">
            {numeral(state.totalVotingPower + vesting).format('0,0')}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default OnlineVotingPower;
