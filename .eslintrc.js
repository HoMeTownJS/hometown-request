module.exports = {
  extends: ['@hometownjs/eslint-config-ts'],
  overrides: [
    {
      files: ['packages/scripts/*.ts', 'packages/*.ts'],
      rules: {
        'no-unused-expressions': 'off'
      }
    }
  ]
};
