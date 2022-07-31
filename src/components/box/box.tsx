import clsx from 'clsx';
import {
  ComponentPropsWithoutRef,
  createElement,
  ReactElement,
  ReactNode,
} from 'react';
import { BorderRadius } from '../../types/border-radius';
import { Color } from '../../types/color';
import { Sizes } from '../../types/sizes';
import { BoxElements } from './box-elements';
import './box.css';

export type BoxProps<T extends BoxElements> = ComponentPropsWithoutRef<T> & {
  as: T;
  backgroundColor?: `${Color}`;
  borderRadius?: `${BorderRadius}`;
  p?: Sizes;
  px?: Sizes;
  py?: Sizes;
  pt?: Sizes;
  pr?: Sizes;
  pb?: Sizes;
  pl?: Sizes;
  children: ReactNode;
};

export const Box = <T extends BoxElements>({
  as: element,
  backgroundColor,
  borderRadius,
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
  className,
  children,
  ...props
}: BoxProps<T>): ReactElement => {
  const backgroundColorClass = `box--background-color-${backgroundColor ?? ''}`;
  const showBackgroundColorClass = backgroundColor !== undefined;

  const borderRadiusClass = `box--border-radius-${borderRadius ?? ''}`;
  const showBorderRadiusClass = borderRadius !== undefined;

  const pClass = `box--p-${p ?? ''}`;
  const showPClass = p !== undefined;

  const pxClass = `box--px-${px ?? ''}`;
  const showPXClass = px !== undefined;

  const pyClass = `box--py-${py ?? ''}`;
  const showPYClass = py !== undefined;

  const ptClass = `box--pt-${pt ?? ''}`;
  const showPTClass = pt !== undefined;

  const prClass = `box--pr-${pr ?? ''}`;
  const showPRClass = pr !== undefined;

  const pbClass = `box--pb-${pb ?? ''}`;
  const showPBClass = pb !== undefined;

  const plClass = `box--pl-${pl ?? ''}`;
  const showPLClass = pl !== undefined;

  return createElement(
    element,
    {
      ...props,
      className:
        clsx(
          showBackgroundColorClass && backgroundColorClass,
          showBorderRadiusClass && borderRadiusClass,
          showPClass && pClass,
          showPXClass && pxClass,
          showPYClass && pyClass,
          showPTClass && ptClass,
          showPRClass && prClass,
          showPBClass && pbClass,
          showPLClass && plClass,
          className,
        ) || undefined,
    },
    children,
  );
};
