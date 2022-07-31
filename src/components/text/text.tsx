import clsx from 'clsx';
import {
  ComponentPropsWithoutRef,
  createElement,
  ReactElement,
  ReactNode,
} from 'react';
import { Color } from '../../enums/color';
import { DEFAULT_VARIANT_MAPPING } from './default-variant-mapping';
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
  as: element,
  variant,
  color,
  className,
  children,
  ...props
}: TextProps<T>): ReactElement => {
  const variantClass = `text--variant-${
    variant ?? DEFAULT_VARIANT_MAPPING[element]
  }`;
  const showVariantClass =
    (variant ?? DEFAULT_VARIANT_MAPPING[element]) !== 'none';

  const colorClass = `text--color-${color ?? ''}`;
  const showColorClass = color !== undefined;

  return createElement(
    element,
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
