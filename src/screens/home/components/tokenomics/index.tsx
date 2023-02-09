import {
  Box, CustomToolTip,
} from '@components';
import { chainConfig } from '@configs';
import { Typography } from '@material-ui/core';
import { readMarket } from '@recoil/market';
import { useGetBalances } from '@src/hooks/use_get_balance';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import React, {
  useEffect, useState,
} from 'react';
import {
  Cell, Pie, PieChart, Tooltip,
} from 'recharts';
import { useRecoilValue } from 'recoil';
import { useTokenomics } from './hooks';
import { useStyles } from './styles';

const Tokenomics: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('home');
  const {
    classes, theme,
  } = useStyles();
  const { state } = useTokenomics();
  const vestingBalances = useGetBalances(
    'mars14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9smxjtde',
  );
  const incentivesBalances = useGetBalances(
    'mars1krxwf5e308jmclyhfd9u92kp369l083wvxkp6n',
  );
  const marketState = useRecoilValue(readMarket);

  const [vesting, setVesting] = useState<number | undefined>();
  const [incentives, setIncentives] = useState<number | undefined>();

  useEffect(() => {
    const vestingResult = async () => {
      const vestingInfo = await vestingBalances;
      const vestingValue = Number(vestingInfo) / 1000000;
      setVesting(vestingValue);
    };
    const incentivesResult = async () => {
      const incentivesInfo = await incentivesBalances;
      const incentivesValue = Number(incentivesInfo) / 1000000;
      setIncentives(incentivesValue);
    };

    if (!vesting) vestingResult();
    if (!incentives) incentivesResult();
  }, [vestingBalances, incentivesBalances]);

  const genesisStake = 50000000;
  const staked = state.bonded > genesisStake ? state.bonded - genesisStake : state.bonded;
  const communityPool = Number(marketState.communityPool.value);
  const community = (state.bonded > genesisStake
    ? communityPool + genesisStake
    : communityPool) + incentives;
  const circulating = state.total - community - vesting;

  const data = [
    {
      legendKey: 'circulating',
      percentKey: 'circulatingPercent',
      value: numeral(circulating).format('0,0'),
      rawValue: circulating,
      percent: `${numeral((circulating * 100) / state.total).format('0.00')}%`,
      fill: theme.palette.custom.tokenomics.one,
    },
    {
      legendKey: 'bonded',
      percentKey: 'bondedPercent',
      value: numeral(staked).format('0,0'),
      rawValue: staked,
      percent: `${numeral((staked * 100) / state.total).format('0.00')}%`,
      fill: theme.palette.custom.tokenomics.two,
    },
    {
      legendKey: 'unbonding',
      percentKey: 'unbondingPercent',
      value: numeral(state.unbonding).format('0,0'),
      rawValue: state.unbonding,
      percent: `${numeral((state.unbonding * 100) / state.total).format(
        '0.00',
      )}%`,
      fill: theme.palette.custom.tokenomics.three,
    },
    {
      legendKey: 'vesting',
      percentKey: 'vestingPercent',
      value: numeral(vesting).format('0,0'),
      rawValue: vesting,
      percent: `${numeral((vesting * 100) / state.total).format('0.00')}%`,
      fill: theme.palette.custom.tokenomics.four,
    },
    {
      legendKey: 'community',
      percentKey: 'communityPercent',
      value: numeral(community).format('0,0'),
      rawValue: community,
      percent: `${numeral((community * 100) / state.total).format('0.00')}%`,
      fill: theme.palette.custom.tokenomics.five,
    },
  ];

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2" className={classes.label}>
        {t('tokenomics')}
      </Typography>
      <div className={classes.data}>
        {data.map((x) => (
          <div className="data__item" key={x.percentKey}>
            <Typography variant="h4">
              {x.value}
              {' '}
              {chainConfig.tokenUnits[state.denom]?.display?.toUpperCase()}
            </Typography>
            <Typography variant="caption">{t(x.legendKey)}</Typography>
          </div>
        ))}
      </div>
      <div className={classes.content}>
        <PieChart width={200} height={100} cy={100}>
          <Pie
            stroke="none"
            // cornerRadius={40}
            cy={90}
            data={data}
            startAngle={180}
            endAngle={0}
            // innerRadius={79}
            outerRadius={90}
            fill="#8884d8"
            // paddingAngle={-10}
            dataKey="rawValue"
            // stroke={theme.palette.background.paper}
            // strokeWidth={3}
            isAnimationActive={false}
          >
            {data.map((entry) => {
              return <Cell key={entry.legendKey} fill={entry.fill} />;
            })}
          </Pie>
          <Tooltip
            content={(
              <CustomToolTip>
                {(x) => {
                  return (
                    <>
                      <Typography variant="caption">
                        {t(x.legendKey)}
                      </Typography>
                      <Typography variant="body1">
                        {x.value}
                        {' '}
                        (
                        {x.percent}
                        )
                      </Typography>
                    </>
                  );
                }}
              </CustomToolTip>
            )}
          />
        </PieChart>

        <div className={classes.legends}>
          {data.map((x) => {
            return (
              <div className="legends__item" key={x.legendKey}>
                <Typography variant="caption">
                  {t(x.percentKey, {
                    percent:
                      x.percent === '0.00%' && x.rawValue > 0
                        ? '< 0.00%'
                        : x.percent,
                  })}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
    </Box>
  );
};

export default Tokenomics;
