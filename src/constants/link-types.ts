import { LinkType } from '../types/link-type';
import { getAsset } from '../utils/get-asset';

export interface LinkTypeDetails {
  name: string;
  image: string;
}

export const LinkTypes: Record<LinkType, LinkTypeDetails> = {
  [LinkType.YouTube]: {
    name: 'Youtube',
    image: getAsset('images/link-types/youtube.webp'),
  },
  [LinkType.Wikipedia]: {
    name: 'Wikipedia',
    image: getAsset('images/link-types/wikipedia.webp'),
  },
};
