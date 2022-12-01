import { useGetComponentDimension } from '@hooks';
import classnames from 'classnames';
import React from 'react';
import { SearchBar } from '../../..';
import {
  Network,
  NetworkList,
  SettingsList
} from './components';
import { useStyles } from './styles';

const ActionBar: React.FC<{
  isNetwork: boolean;
  className?: string;
  toggleNetwork: () => void;
}> = ({
  toggleNetwork,
  className,
  isNetwork,
}) => {
  const {
    ref: heightRef,
  } = useGetComponentDimension();
  const classes = useStyles();
  return (
    <div className={classnames(className, classes.root)} ref={heightRef}>
      <div className={classes.actions}>
        <SearchBar className={classnames(classes.searchBar)} />
        <Network
          className={classnames(classes.network, { open: isNetwork })}
          toggleNetwork={toggleNetwork}
        />
        <SettingsList />
      </div>
      <NetworkList
        open={isNetwork}
        handleCancel={toggleNetwork}
      />
    </div>
  );
};

export default ActionBar;
