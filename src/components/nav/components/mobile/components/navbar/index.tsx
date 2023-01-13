import MarsLogo from '@assets/mars-protocol.svg';
import { ExpandMore } from '@material-ui/icons';
import { readSelectedNetwork } from '@recoil/big_dipper_networks';
import { HOME } from '@utils/go_to_page';
import classnames from 'classnames';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { useStyles } from './styles';
import { NavbarProps } from './types';

const Navbar = (props:NavbarProps) => {
  const classes = useStyles();
  const selected = useRecoilValue(readSelectedNetwork);
  const {
    isOpen,
    toggleNavMenus,
    openNetwork,
  } = props;

  return (
    <div className={classes.root}>
      <Link href={HOME}>
        <a className={classes.a}>
          <MarsLogo className={classes.logo} />
        </a>
      </Link>
      <div className={classes.actions}>
        {/* =================================== */}
        {/* Network */}
        {/* =================================== */}
        <div
          className={classes.network}
          role="button"
          onClick={openNetwork}
        >
          <p className="text">
            {selected}
          </p>
          <ExpandMore fontSize="small" />
        </div>
        {/* =================================== */}
        {/* Hamburger */}
        {/* =================================== */}
        <div
          role="button"
          onClick={toggleNavMenus}
          className={classnames(classes.hamburger, {
            active: isOpen,
          })}
        >
          <div className="hamburger-content" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
