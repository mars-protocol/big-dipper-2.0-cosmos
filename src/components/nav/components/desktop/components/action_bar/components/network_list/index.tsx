import React from 'react';
import classnames from 'classnames';
import { Box } from '@material-ui/core';
import { Networks } from '@src/components/nav/components';
import { useStyles } from './styles';

const NetworkList: React.FC<{
  className?: string;
}> = ({
  className,
}) => {
  const classes = useStyles();

  return (
    <Box
      boxShadow={3}
      className={classnames(className, classes.root)}
    >
      <Networks className={classes.content} />
    </Box>
  );
};

export default NetworkList;
