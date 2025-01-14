import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  {
    rules: {
      "no-console": "off",
      "no-unused-vars": "off",
      "no-undef": "off",
      "prefer-const": "error",
      eqeqeq: "error",
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "no-var": "error",
      curly: "error",
      camelcase: "error",
    },
  },
];
