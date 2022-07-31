import clsx from 'clsx';
import {
  ComponentPropsWithoutRef,
  createElement,
  ReactElement,
  ReactNode,
} from 'react';
import { BorderRadius } from '../../enums/border-radius';
import { Color } from '../../enums/color';
import { BoxElements } from './box-elements';
import './box.css';

export type BoxProps<T extends BoxElements> = ComponentPropsWithoutRef<T> & {
  as: T;
  backgroundColor?: `${Color}`;
  borderRadius?: `${BorderRadius}`;
  children: ReactNode;
};

export const Box = <T extends BoxElements>({
  as: element,
  backgroundColor,
  borderRadius,
  className,
  children,
  ...props
}: BoxProps<T>): ReactElement => {
  const backgroundColorClass = `box--background-color-${backgroundColor ?? ''}`;
  const showBackgroundColorClass = backgroundColor !== undefined;

  const borderRadiusClass = `box--border-radius-${borderRadius ?? ''}`;
  const showBorderRadiusClass = borderRadius !== undefined;

  return createElement(
    element,
    {
      ...props,
      className:
        clsx(
          showBackgroundColorClass && backgroundColorClass,
          showBorderRadiusClass && borderRadiusClass,
          className,
        ) || undefined,
    },
    children,
  );
};
