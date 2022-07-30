import { TextElements } from './text-elements';
import { TextVariants } from './text-variants';

export const DEFAULT_MAPPING: Record<TextElements, TextVariants> = {
  h1: 'heading-1',
  h2: 'heading-2',
  h3: 'heading-3',
  h4: 'heading-4',
  h5: 'heading-5',
  h6: 'heading-6',
  p: 'paragraph',
  small: 'small',
  strong: 'strong',
  sub: 'sub',
  sup: 'sup',
  span: 'none',
  em: 'none',
  abbr: 'none',
  del: 'none',
  ins: 'none',
};
