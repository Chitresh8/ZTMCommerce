// jest.config.cjs
module.exports = {
    transform: {
      '^.+\\.[jt]sx?$': 'babel-jest',
    },
    testEnvironment: 'jest-environment-jsdom',
    moduleFileExtensions: ['js', 'jsx'],
    setupFilesAfterEnv: ['./jest.setup.js'], // optional
  };
  