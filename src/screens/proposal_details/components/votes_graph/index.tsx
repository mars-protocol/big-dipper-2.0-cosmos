import {
  Box, InfoPopover,
} from '@components';
import { Typography } from '@material-ui/core';
import { useGetBalances } from '@src/hooks/use_get_balance';
import Big from 'big.js';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import React, {
  useEffect, useState,
} from 'react';
import {
  Cell, Pie, PieChart,
} from 'recharts';
import { QuorumExplanation } from './components';
import { useVotesGraph } from './hooks';
import { useStyles } from './styles';
import { formatGraphData } from './utils';

const VotesGraph: React.FC<ComponentDefault> = (props) => {
  const {
    classes, theme,
  } = useStyles();
  const { t } = useTranslation('proposals');
  const { state } = useVotesGraph();
  const { votes } = state;
  const { quorum } = state;

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

  const total = Big(votes.yes.value)
    .plus(votes.no.value)
    .plus(votes.veto.value)
    .plus(votes.abstain.value);

  const formattedData = formatGraphData({
    data: votes,
    theme,
    total,
  });

  const totalVotingPower = Number(state.bonded.value) + vesting;
  const totalVotedFormat = numeral(total.toFixed(2)).format('0,0.[00]');
  const totalBondedFormat = numeral(totalVotingPower).format('0,0.[00]');
  const totalVotedPercent = total.gt(0)
    ? `${numeral(
      Big(total.toFixed(2)).div(totalVotingPower).times(100).toFixed(2),
    ).format('0.[00]')}%`
    : '0%';

  return (
    <Box className={classnames(props.className, classes.root)}>
      <div className={classes.pie}>
        <PieChart width={250} height={250}>
          <Pie
            cx="50%"
            cy="50%"
            stroke="none"
            dataKey="value"
            data={formattedData}
            fill="#8884d8"
            isAnimationActive={false}
          >
            {formattedData.map((entry, index) => {
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke={entry.color}
                />
              );
            })}
          </Pie>
        </PieChart>
      </div>
      <div className={classes.legend}>
        <div className={classes.total}>
          <Typography variant="caption">
            {t('votedTotalCaption', {
              totalVotedPercent,
            })}
          </Typography>
          <Typography variant="h2">
            {totalVotedFormat}
            {' '}
            /
            {totalBondedFormat}
          </Typography>
        </div>

        {formattedData
          .filter((x) => x.name !== 'empty')
          .map((x) => {
            return (
              <div
                key={x.name}
                className={classnames(classes.voteItem, x.name)}
              >
                <Typography variant="caption">
                  {t(x.name)}
                  {' '}
                  (
                  {x.percentage}
                  )
                </Typography>
                <Typography>{x.display}</Typography>
              </div>
            );
          })}
      </div>
      <div className={classes.popOver}>
        <InfoPopover content={<QuorumExplanation quorum={quorum} />} />
      </div>
    </Box>
  );
};

export default VotesGraph;
