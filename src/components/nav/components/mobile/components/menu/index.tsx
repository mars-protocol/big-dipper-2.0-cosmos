import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import {
  Drawer,
  MenuItem,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
/* import Language from '@assets/icon-language.svg';
import ThemeIcon from '@assets/icon-theme.svg';
import {
  ExpandMoreOutlined,
} from '@material-ui/icons'; */
import { useStyles } from './styles';
import { MenuItems } from '../../..';
import {
  useLanguageDrawer,
} from './hooks';
import { MenuProps } from './types';

const Menu = (props: MenuProps) => {
  const router = useRouter();
  const {
    t,
    lang,
  } = useTranslation('common');

  const {
    toggleNavMenus,
    className,
  } = props;

  const classes = useStyles();
  const languageOptions = useLanguageDrawer(lang, toggleNavMenus);

  /* const themeOptions = useThemeDrawer(toggleNavMenus); */
  return (
    <>
      {/* ================================== */}
      {/* Lang Drawer */}
      {/* ================================== */}
      <Drawer
        anchor="bottom"
        open={languageOptions.drawerOpen}
        onClose={languageOptions.toggleDrawer}
        className={classnames(classes.drawer, 'lang-drawer')}
      >
        <div className={classnames('content')}>
          {
            router.locales
              .filter((l) => l !== lang)
              .map((l) => (
                <div key={l}>
                  <Link
                    href={{
                      pathname: router.pathname,
                      query: router.query,
                    }}
                    locale={l}
                    passHref
                  >
                    <MenuItem button component="a">
                      {t(l)}
                    </MenuItem>
                  </Link>
                </div>
              ))
            }
        </div>
      </Drawer>
      {/* ================================== */}
      {/* Main Content */}
      {/* ================================== */}
      <div className={classnames(className, classes.root)}>
        <div className={classes.menu}>
          <MenuItems />
        </div>
      </div>
    </>
  );
};

export default Menu;
