const reactPlugin = require("eslint-plugin-react");
const reactHooksPlugin = require("eslint-plugin-react-hooks");
const jsxA11yPlugin = require("eslint-plugin-jsx-a11y");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const prettierPlugin = require("eslint-plugin-prettier");
const tsParser = require("@typescript-eslint/parser");

module.exports = [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser, // Use the TypeScript parser
      parserOptions: {
        ecmaVersion: "latest", // Enable modern JavaScript
        sourceType: "module", // Use ESModules
        ecmaFeatures: {
          jsx: true, // Enable JSX
        },
      },
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
      "@typescript-eslint": tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...jsxA11yPlugin.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules, // Add recommended TypeScript rules
      "react/self-closing-comp": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off", // Disable React import requirement for JSX (React 17+)
      "@typescript-eslint/no-require-imports": "off", // Disable the rule if converting to ESM is not feasible
    },
    ignores: ["dist/**", "**/*.d.ts"], // Ignore built files and declaration files
  },
];
