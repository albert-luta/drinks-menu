import clsx from 'clsx';
import { FC, ReactElement } from 'react';
import { Box, BoxProps } from '../box';
import { CardContent } from './card-content';
import { CardFooter } from './card-footer';
import { CardHeader } from './card-header';
import './card.css';

export type CardProps = Omit<BoxProps<'article'>, 'as'>;

export const Card: FC<CardProps> & CardSubcomponents = ({
  children,
  className,
  ...props
}: CardProps): ReactElement => {
  return (
    <Box {...props} as="article" className={clsx('card', className)}>
      {children}
    </Box>
  );
};

interface CardSubcomponents {
  Header: typeof CardHeader;
  Footer: typeof CardFooter;
  Content: typeof CardContent;
}

Card.Header = CardHeader;
Card.Footer = CardFooter;
Card.Content = CardContent;
