module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  plugins: ['prettier', 'vue', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'prettier',
    'prettier/vue',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
  },
}
