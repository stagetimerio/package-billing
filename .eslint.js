module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  rules: {
    'quotes': ['warn', 'single'],
    'semi': ['warn', 'never'],
    'indent': ['warn', 2, { 'SwitchCase': 1 }],
    'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['info', 'warn', 'error', 'debug']}] : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['warn', 'always-multiline'],
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-unused-expressions': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-only-tests/no-only-tests': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
}
