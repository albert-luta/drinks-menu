import { ReactElement } from 'react';
import { Box, BoxProps } from '../box';

export interface VerticalSpaceProps {
  size: NonNullable<BoxProps<'div'>['pb']>;
}

export const VerticalSpace = ({ size }: VerticalSpaceProps): ReactElement => {
  return (
    <Box as="div" pb={size}>
      {null}
    </Box>
  );
};
