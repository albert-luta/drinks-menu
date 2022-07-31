import clsx from 'clsx';
import {
  ComponentPropsWithoutRef,
  createElement,
  ReactElement,
  ReactNode,
} from 'react';
import { Color } from '../../enums/color';
import { BoxElements } from './box-elements';
import './box.css';

export type BoxProps<T extends BoxElements> = ComponentPropsWithoutRef<T> & {
  as: T;
  backgroundColor?: `${Color}`;
  children: ReactNode;
};

export const Box = <T extends BoxElements>({
  as: element,
  backgroundColor,
  className,
  children,
  ...props
}: BoxProps<T>): ReactElement => {
  const backgroundColorClass = `box--background-color-${backgroundColor ?? ''}`;
  const showBackgroundColorClass = backgroundColor !== undefined;

  return createElement(
    element,
    {
      ...props,
      className:
        clsx(showBackgroundColorClass && backgroundColorClass, className) ||
        undefined,
    },
    children,
  );
};
