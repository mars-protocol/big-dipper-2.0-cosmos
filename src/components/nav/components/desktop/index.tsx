import React from 'react';
import classnames from 'classnames';
import {
  Drawer,
  AppBar,
  ClickAwayListener,
} from '@material-ui/core';
import MarsLogo from '@assets/mars.svg';
import { useStyles } from './styles';
import { useDesktop } from './hooks';
import {
  MenuItems,
  TitleBar,
} from '..';
import { ActionBar } from './components';

const Desktop: React.FC<{
  className?: string;
}> = ({
  className,
}) => {
  const classes = useStyles();
  const {
    isMenu,
    toggleMenu,
    turnOffAll,
    toggleNetwork,
    isNetwork,
  } = useDesktop();
  return (
    <ClickAwayListener onClickAway={turnOffAll}>
      <div
        className={classnames(className, classes.root)}
      >
        <AppBar
          position="relative"
          className={classnames(classes.appBar, {
            open: isMenu,
          })}
        >
          <ActionBar
            toggleNetwork={toggleNetwork}
            isNetwork={isNetwork}
          />
          <TitleBar />
        </AppBar>
        <Drawer
          variant="permanent"
          className={classnames(classes.drawer, {
            open: isMenu,
            closed: !isMenu,
            [classes.drawerOpen]: isMenu,
            [classes.drawerClose]: !isMenu,
          })}
          classes={{
            paper: classnames({
              open: isMenu,
              closed: !isMenu,
              [classes.drawerOpen]: isMenu,
              [classes.drawerClose]: !isMenu,
            }),
          }}
        >
          <MarsLogo
            className={classes.logo}
            onClick={toggleMenu}
            role="button"
          />
          <MenuItems />
        </Drawer>
      </div>
    </ClickAwayListener>
  );
};

export default Desktop;
