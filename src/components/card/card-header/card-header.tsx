import clsx from 'clsx';
import { ReactElement } from 'react';
import { Box, BoxProps } from '../../box';
import './card-header.css';

export type CardHeaderProps = Omit<BoxProps<'header'>, 'as'>;

export const CardHeader = ({
  children,
  className,
  ...props
}: CardHeaderProps): ReactElement => {
  return (
    <Box {...props} as="header" className={clsx('card-header', className)}>
      {children}
    </Box>
  );
};
