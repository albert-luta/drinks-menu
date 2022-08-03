import clsx from 'clsx';
import { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';
import { VisuallyHidden } from '../visually-hidden';
import './checkbox.css';

export type CheckboxProps = ComponentPropsWithoutRef<'input'> &
  Required<Pick<ComponentPropsWithoutRef<'input'>, 'checked' | 'onChange'>> & {
    children: ReactNode;
  };

export const Checkbox = ({
  checked,
  onChange,
  children,
  disabled,
  ...props
}: CheckboxProps): ReactElement => {
  return (
    <label className={clsx('checkbox', disabled && 'checkbox--disabled')}>
      <VisuallyHidden>
        <input
          {...props}
          type="checkbox"
          aria-checked={checked}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
      </VisuallyHidden>

      <div
        aria-hidden
        className={clsx(
          'checkbox__icon',
          checked && 'checkbox__icon--checked',
          disabled && 'checkbox__icon--disabled',
        )}
      />
      <span>{children}</span>
    </label>
  );
};
