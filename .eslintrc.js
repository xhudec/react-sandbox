module.exports = {
  extends: ['airbnb', 'plugin:flowtype/recommended'],
  plugins: ['prettier', 'flowtype'],
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  rules: {
    'import/prefer-default-export': 0,
    'import/first': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
  },
};
