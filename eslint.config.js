import eslint from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
export default [
  eslint.configs.recommended, // Base rules
  prettier,                   // Prettier compatibility
  {
    files: ["**/*.ts"],       // Apply to TypeScript files
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      prettier: prettierPlugin,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "no-var": "error",
      "semi": ["error", "always"],
      "no-unused-vars":["error"],
      "indent": ["error", 2, { SwitchCase: 1 }],
      "no-multi-spaces": "error",
      "space-in-parens": "error",
      "no-multiple-empty-lines": "error",
      "prefer-const": "error",
      "prettier/prettier": "error",
        "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
];
