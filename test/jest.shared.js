// To inject Environment Variables into Jest
require('dotenv').config()

const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..'),
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^assets[/](.+)': '<rootDir>/src/assets/$1',
    '^components[/](.+)': '<rootDir>/src/components/$1',
    '^utils[/](.+)': '<rootDir>/src/utils/$1',
    '^utils$': '<rootDir>/src/utils',
    '^theme$': '<rootDir>/src/theme',
    '^@test/helpers$': '<rootDir>/test/helpers',
    '\\.module\\.(css|less|svg|jpg|jpeg|png)': 'identity-obj-proxy',
    '\\.(css|less|svg|jpg|jpeg|png)$': require.resolve('./emptyObjectMock.js'),
  },
  testMatch: ['<rootDir>/**/__tests__/**/.*(ts|js)?x'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    'jest-watch-select-projects',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
}
