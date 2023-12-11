module.exports = {
  extends:  "@rocketseat/eslint-config/react",
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off"
  },
}
