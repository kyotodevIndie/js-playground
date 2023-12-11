module.exports = {
  extends: [
    '@rocketseat/eslint-config/react',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  plugins: ['@tanstack/query'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@tanstack/query/exhaustive-deps': 'error',
  },
}
