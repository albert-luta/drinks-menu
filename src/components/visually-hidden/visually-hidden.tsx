import { ReactElement, ReactNode } from 'react';
import './visually-hidden.css';

export interface VisuallyHiddenProps {
  children: ReactNode;
}

export const VisuallyHidden = ({
  children,
}: VisuallyHiddenProps): ReactElement => {
  return <div className="visually-hidden">{children}</div>;
};
