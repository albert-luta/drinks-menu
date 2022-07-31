import clsx from 'clsx';
import {
  ComponentPropsWithoutRef,
  createElement,
  ReactElement,
  ReactNode,
} from 'react';
import { Color } from '../../enums/color';
import { DEFAULT_MAPPING } from './default-mapping';
import { TextElements } from './text-elements';
import { TextVariants } from './text-variants';
import './text.css';

export type TextProps<T extends TextElements> = ComponentPropsWithoutRef<T> & {
  as: T;
  variant?: TextVariants;
  color?: `${Color}`;
  children: ReactNode;
};

export const Text = <T extends TextElements>({
  as,
  variant,
  color,
  className,
  children,
  ...props
}: TextProps<T>): ReactElement => {
  const variantClass = `text--variant-${variant ?? DEFAULT_MAPPING[as]}`;
  const showVariantClass = (variant ?? DEFAULT_MAPPING[as]) !== 'none';

  const colorClass = `text--color-${color ?? ''}`;
  const showColorClass = color !== undefined;

  return createElement(
    as,
    {
      ...props,
      className:
        clsx(
          showVariantClass && variantClass,
          showColorClass && colorClass,
          className,
        ) || undefined,
    },
    children,
  );
};
