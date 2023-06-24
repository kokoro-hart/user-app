module.exports = {
  env: {
    es2021: true,
  },
  plugins: ["jsx-a11y"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  rules: {
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "react/jsx-boolean-value": ["error"],
    "react/self-closing-comp": ["error"],
    "@typescript-eslint/no-unused-vars": ["error"],
  },
};
