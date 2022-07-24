export const getAsset = (name: string): string => {
  return new URL(`../assets/${name}`, import.meta.url).href;
};
