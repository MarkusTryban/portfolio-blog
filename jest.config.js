const path = require('path');

module.exports = {
  setupFilesAfterEnv: [path.resolve(__dirname, './setup-test-env.js')],
  transform: {
    '\\.svg': '<rootDir>/svgTransform.js',
    '^.+\\.(tsx?|jsx?)$': `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    '\\.svg': `<rootDir>/svgTransform.js`,
    'typeface-*': 'identity-obj-proxy',
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`, `\\.svg`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  collectCoverage: false,
  coverageReporters: ['lcov', 'text', 'html'],
};
