module.exports = {
  extends: [
    "next/core-web-vitals",
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:react/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
  ],
  plugins: ["@typescript-eslint", "react", "unused-imports", "@tanstack/query"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    // project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    "react-hooks/exhaustive-deps": 2,
    "react/require-default-props": "off",
    "import/no-unresolved": 0,
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        functions: true,
        classes: true,
        variables: false,
      },
    ],
    "import/extensions": [
      2,
      {
        png: "always",
        jpeg: "always",
        json: "always",
      },
    ],
    "react/prop-types": 0,
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "react/jsx-uses-vars": 1,
    "jsx-a11y/anchor-is-valid": "off",
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "arrow-body-style": "off",
    // 'react/jsx-curly-spacing': [2, 'always'],
    "react/jsx-props-no-spreading": "off",
    "max-len": [
      "error",
      {
        code: 120,
        ignoreUrls: true,
        ignoreTrailingComments: true,
        ignoreRegExpLiterals: true,
        ignorePattern: "^import .*",
      },
    ],
    "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "react/no-unescaped-entities": "off",
    // 'template-curly-spacing': ['error', 'always'],
    "react/jsx-one-expression-per-line": "off",
    "object-curly-newline": "off",
    "react/style-prop-object": [2, { allow: ["StatusBar"] }],
    "global-require": "off",
    camelcase: "off",
    "no-underscore-dangle": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "import/prefer-default-export": "off",
    "lines-between-class-members": "off",
    "no-plusplus": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },
      {
        blankLine: "always",
        prev: ["const", "let", "var"],
        next: "*",
      },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],
    "func-names": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/no-duplicate-enum-values": "off",
    // 'react/no-inline-styles': 'error',
    "no-console": 2,
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "react/no-unstable-nested-components": "off",
  },
};
