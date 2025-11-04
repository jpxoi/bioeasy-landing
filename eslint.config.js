import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ["**/*.{js,jsx}"],
    ...pluginReact.configs.flat.recommended,
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: { version: "detect" },
    },
  },
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
    ignores: ["src/index.css"],
  },
  {
    files: ["*.config.{js,cjs,mjs}", "vite.config.{js,cjs,mjs}", "eslint.config.js"],
    languageOptions: { globals: globals.node },
  },
]);
