  module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom', // For React tests
    transform: {
      '^.+\\.tsx?$': 'ts-jest', // Use ts-jest for TypeScript files
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'], // Jest DOM matchers
    setupFilesAfterEnv: ['@testing-library/jest-dom/'], 
  };