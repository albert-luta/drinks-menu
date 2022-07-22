export default {
  '*.{json,yml,yaml,md}': ['prettier --write'],
  '*.css': ['stylelint --fix', 'prettier --write'],
  '*.{ts,tsx}': ['eslint --fix', () => 'tsc --noEmit', 'prettier --write'],
};
