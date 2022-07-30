import clsx from 'clsx';
import {
  ComponentPropsWithoutRef,
  createElement,
  ReactElement,
  ReactNode,
} from 'react';
import { DEFAULT_MAPPING } from './default-mapping';
import { TextElements } from './text-elements';
import { TextVariants } from './text-variants';
import './text.css';

export type TextProps<T extends TextElements> = ComponentPropsWithoutRef<T> & {
  as: T;
  variant?: TextVariants;
  children: ReactNode;
};

export const Text = <T extends TextElements>({
  as,
  variant,
  className,
  children,
  ...props
}: TextProps<T>): ReactElement => {
  const textClassName = `text--${variant ?? DEFAULT_MAPPING[as]}`;
  const showClass = (variant ?? DEFAULT_MAPPING[as]) !== 'none';

  return createElement(
    as,
    {
      ...props,
      className: clsx(showClass && textClassName, className) || undefined,
    },
    children,
  );
};
