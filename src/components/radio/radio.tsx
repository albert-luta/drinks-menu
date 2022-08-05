import clsx from 'clsx';
import { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';
import { VisuallyHidden } from '../visually-hidden';
import './radio.css';

export type RadioProps = ComponentPropsWithoutRef<'input'> &
  Required<Pick<ComponentPropsWithoutRef<'input'>, 'checked' | 'onChange'>> & {
    children: ReactNode;
  };

export const Radio = ({
  checked,
  onChange,
  children,
  disabled,
  ...props
}: RadioProps): ReactElement => {
  return (
    <label className={clsx('radio', disabled && 'radio--disabled')}>
      <VisuallyHidden>
        <input
          {...props}
          type="radio"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
      </VisuallyHidden>

      <div
        aria-hidden
        className={clsx(
          'radio__icon',
          checked && 'radio__icon--checked',
          disabled && 'radio__icon--disabled',
        )}
      />
      <span>{children}</span>
    </label>
  );
};
