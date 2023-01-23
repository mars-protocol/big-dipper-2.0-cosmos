import {
  Footer, Nav
} from '@components';
import classnames from 'classnames';
import { useStyles } from './styles';
import { LayoutProps } from './types';

const Layout = (props:LayoutProps) => {
  const classes = useStyles();

  const {
    children,
    className,
  } = props;

  return (
    <div className={classes.root}>
      <div className={classnames(classes.contentWrapper)}>
        <Nav />
        <div className={classes.children}>
          <div className={classes.appBarPlaceholder} />
          <div className={classnames(className, 'main-content')}>
            {children}
          </div>
        </div>
      </div>
      <Footer className={classes.footer} />
    </div>
  );
};

export default Layout;
