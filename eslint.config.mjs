import js from '@eslint/js';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  stylistic.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    ignores: [],
    plugins: { js, '@stylistic': stylistic },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always']
    }
  },
  {
    ignores: ['**/*.js', '**/*.mjs']
  },
  tseslint.configs.recommended
]);
