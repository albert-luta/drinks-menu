import { ReactElement } from 'react';
import { Box, BoxProps } from '../box';

export interface DividerProps {
  size?: BoxProps<'div'>['pb'];
  color: BoxProps<'div'>['backgroundColor'];
}

export const Divider = ({
  size = '0-125',
  color,
}: DividerProps): ReactElement => {
  return (
    <Box as="div" pb={size} backgroundColor={color}>
      {null}
    </Box>
  );
};
