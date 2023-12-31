module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/extensions': 'off',
    'prefer-const': 'off',
    'no-param-reassign': 'off',
    'prefer-destructuring': 'off',
    'no-shadow': 'off',
  },
};
