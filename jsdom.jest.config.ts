export default {
  collectCoverage: true,
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  moduleFileExtensions: ['js', 'ts'],
  coveragePathIgnorePatterns: ['/src/wx-mini', '/src/React', '/src/Vue'],
  testMatch: ['**/*.spec.ts'],
  moduleNameMapper: {
    // alias src/(.*) not work
    // 从上到下优先匹配
    '@/test/(.*)': '<rootDir>/test/$1',
    '@geweidong/(.*)': '<rootDir>/packages/$1/src/index'
  },
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json',
      diagnostics: false
    }
  }
}
