module.exports = {
  extends: [
    'airbnb-base'
  ],
  plugins: [
    'simple-import-sort'
  ],
  env: {
    'node': true,
    'jest': true,
  },
  rules: {
    'class-methods-use-this': 0,
    'no-console': 0,
    'simple-import-sort/sort': 'error',
    'sort-keys': ['error', 'asc', { 'caseSensitive': true, 'natural': true }]
  }
};
