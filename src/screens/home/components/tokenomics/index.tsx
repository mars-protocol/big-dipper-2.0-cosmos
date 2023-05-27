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

  const staked = state.bonded;
  const unstaking = state.unbonding;
  const communityPool = Number(marketState.communityPool.value);
  const community = communityPool + incentives;
  const circulating = state.total - community - vesting;

  const data = [
    {
      legendKey: 'circulating',
      percentKey: 'circulatingPercent',
      value: numeral(circulating).format('0,0'),
      rawValue: circulating,
      percent: `${numeral((circulating * 100) / state.total).format('0.00')}%`,
      fill: theme.palette.custom.tokenomics.one,
      subset: [
        {
          legendKey: 'bonded',
          value: numeral(staked).format('0,0'),
          percent: `${numeral((staked * 100) / state.total).format('0.00')}%`,
        },
        {
          legendKey: 'unbonding',
          value: numeral(unstaking).format('0,0'),
          percent: `${numeral((unstaking * 100) / state.total).format(
            '0.00',
          )}%`,
        },
      ],
    },
    {
      legendKey: 'vesting',
      percentKey: 'vestingPercent',
      value: numeral(vesting).format('0,0'),
      rawValue: vesting,
      percent: `${numeral((vesting * 100) / state.total).format('0.00')}%`,
      fill: theme.palette.custom.tokenomics.two,
    },
    {
      legendKey: 'community',
      percentKey: 'communityPercent',
      value: numeral(community).format('0,0'),
      rawValue: community,
      percent: `${numeral((community * 100) / state.total).format('0.00')}%`,
      fill: theme.palette.custom.tokenomics.three,
    },
  ];

  const legendData = {
    circulating: {
      legendKey: 'circulating',
      value: numeral(circulating).format('0,0'),
    },
    staked: {
      legendKey: 'bonded',
      value: numeral(staked).format('0,0'),
    },
    unstaking: {
      legendKey: 'unbonding',
      value: numeral(unstaking).format('0,0'),
    },
    vesting: {
      legendKey: 'vesting',
      value: numeral(vesting).format('0,0'),
    },
    community: {
      legendKey: 'community',
      value: numeral(community).format('0,0'),
    },
  };

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2" className={classes.label}>
        {t('tokenomics')}
      </Typography>
      <div className={classes.data}>
        <div className="data__item">
          <Typography variant="body2" className="label">
            {t(legendData.circulating.legendKey)}
          </Typography>
          <Typography variant="h4">
            {legendData.circulating.value}
            {' '}
            {chainConfig.tokenUnits[state.denom]?.display?.toUpperCase()}
          </Typography>
          <Typography variant="caption">
            {t(legendData.staked.legendKey)}
          </Typography>
          <Typography variant="h5">
            {legendData.staked.value}
            {' '}
            {chainConfig.tokenUnits[state.denom]?.display?.toUpperCase()}
          </Typography>
          <Typography variant="caption">
            {t(legendData.unstaking.legendKey)}
          </Typography>
          <Typography variant="h5">
            {legendData.unstaking.value}
            {' '}
            {chainConfig.tokenUnits[state.denom]?.display?.toUpperCase()}
          </Typography>
        </div>
        <div className="data__item">
          <Typography variant="body2" className="label">
            {t(legendData.community.legendKey)}
          </Typography>
          <Typography variant="h4">
            {legendData.community.value}
            {' '}
            {chainConfig.tokenUnits[state.denom]?.display?.toUpperCase()}
          </Typography>
          <Typography variant="body2" className="label">
            {t(legendData.vesting.legendKey)}
          </Typography>
          <Typography variant="h4">
            {legendData.vesting.value}
            {' '}
            {chainConfig.tokenUnits[state.denom]?.display?.toUpperCase()}
          </Typography>
        </div>
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
                      {x.subset?.map((y) => (
                        <div className="subset">
                          <Typography variant="body1" key={y.legendKey}>
                            {t(y.legendKey)}
                          </Typography>
                          <Typography variant="body1">
                            {y.value}
                            {' '}
                            (
                            {y.percent}
                            )
                          </Typography>
                        </div>
                      ))}
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
