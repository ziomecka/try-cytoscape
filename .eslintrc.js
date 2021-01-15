module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 0,
    'no-use-before-define': 0,
    quotes: [2, 'single'],
    semi: [2, 'always'],
    'comma-dangle': [2, 'always-multiline'],
  },
};
