import React from 'react';
import dynamic from 'next/dynamic';
import { useScreenSize } from '@hooks';
import { Mobile } from './components';
import { useStyles } from './styles';

const Desktop = dynamic(() => import('./components/desktop'));

const Nav:React.FC = () => {
  const classes = useStyles();
  const { isDesktop } = useScreenSize();
  return (
    <>
      {isDesktop ? (
        <Desktop
          className={classes.desktop}
        />
      ) : (
        <Mobile
          className={classes.mobile}
        />
      )}
    </>
  );
};

export default Nav;
