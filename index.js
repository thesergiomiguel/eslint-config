module.exports = {
  root: true,

  parser: "@typescript-eslint/parser",

  parserOptions: {
    sourceType: "module",

    ecmaVersion: 2021,
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: false,
    },
  },

  env: {
    browser: true,
    es2021: true,
  },

  plugins: ["@typescript-eslint", "prettier"],

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ].concat(
    [
      // Custom rules go here.
      "./rules/general",
      "./rules/typescript",
    ].map(require.resolve)
  ),

  overrides: [
    // Test files.
    {
      files: ["*.test.js*", "*.spec.js*", "*.test.ts*", "*.spec.ts*"],

      env: {
        "jest/globals": true,
      },

      plugins: ["jest"],

      extends: ["plugin:jest/recommended", "plugin:jest/style"],
    },
  ],
};
