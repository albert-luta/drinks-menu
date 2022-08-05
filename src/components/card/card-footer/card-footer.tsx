import clsx from 'clsx';
import { ReactElement } from 'react';
import { Box, BoxProps } from '../../box';
import './card-footer.css';

export type CardFooterProps = Omit<BoxProps<'footer'>, 'as'>;

export const CardFooter = ({
  children,
  className,
  ...props
}: CardFooterProps): ReactElement => {
  return (
    <Box {...props} as="footer" className={clsx('card-footer', className)}>
      {children}
    </Box>
  );
};
