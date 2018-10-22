module.exports = {
  'env': {
    'browser': true,
    'jest': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'airbnb',
    'prettier',
  ],
  'plugins': [
    'prettier',
  ],
  'rules': {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js'] }],
    'jsx-a11y/anchor-is-valid': [ 'error', {
      'aspects': [ 'noHref' ]
    }],
    'react/prefer-stateless-function': [0, { 'ignorePureComponents': false }],
    "react/forbid-prop-types": [1, { "forbid": [] }],
    'jsx-a11y/label-has-for': 0,
    'no-param-reassign': [2, { 'props': false }],
    "react/no-multi-comp": [0, { "ignoreStateless": 1 }]
  }
}