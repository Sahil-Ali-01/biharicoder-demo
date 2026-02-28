const tsPlugin = require('@typescript-eslint/eslint-plugin');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');

module.exports = [
	{
		ignores: ['node_modules/**', '.next/**'],
	},
	{
		files: ['**/*.{ts,tsx,js,jsx}'],
		languageOptions: {
			parser: require('@typescript-eslint/parser'),
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: 'module',
				ecmaFeatures: { jsx: true },
			},
		},
		settings: { react: { version: 'detect' } },
		plugins: {
			'@typescript-eslint': tsPlugin,
			react: reactPlugin,
			'react-hooks': reactHooksPlugin,
		},
		rules: Object.assign(
			{},
			tsPlugin.configs?.recommended?.rules || {},
			reactPlugin.configs?.recommended?.rules || {},
			{
				'@typescript-eslint/explicit-function-return-type': 'off',
				'react/react-in-jsx-scope': 'off',
				'no-console': ['warn', { allow: ['warn', 'error'] }],
				'react/prop-types': 'off',
				'react/no-unescaped-entities': 'off',
				'@typescript-eslint/no-unused-vars': ['warn', { 'varsIgnorePattern': '^_', 'argsIgnorePattern': '^_', 'ignoreRestSiblings': true }]
			}
		),
	},
];
