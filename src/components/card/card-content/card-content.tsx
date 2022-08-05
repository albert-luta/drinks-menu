import clsx from 'clsx';
import { ReactElement } from 'react';
import { Box, BoxProps } from '../../box';
import './card-content.css';

export type CardContentProps = Omit<BoxProps<'div'>, 'as'>;

export const CardContent = ({
  children,
  className,
  ...props
}: CardContentProps): ReactElement => {
  return (
    <Box {...props} as="div" className={clsx('card-content', className)}>
      {children}
    </Box>
  );
};
