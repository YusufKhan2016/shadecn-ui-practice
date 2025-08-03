import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    ...js.configs.recommended,
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'script',
    },
  },
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      // 👇 disable multi-word component name rule
      'vue/multi-word-component-names': 'off',
    },
  },
]
