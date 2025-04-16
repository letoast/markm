import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind'
// import {
// 	getDefaultCallees,
// 	getDefaultAttributes,
// } from 'eslint-plugin-readable-tailwind/api/defaults'
import { MatcherType } from 'eslint-plugin-readable-tailwind/api/types'
// import eslintParserVue from 'vue-eslint-parser'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
	// {
	// 	files: ['**/*.vue'],
	// 	languageOptions: {
	// 		parser: eslintParserVue,
	// 	},
	// },
	{
		plugins: {
			'readable-tailwind': eslintPluginReadableTailwind,
		},
		settings: {
			'readable-tailwind': {
				entryPoint: './assets/css/main.css',
				tailwindConfig: './tailwind.config.js',
			},
		},
		rules: {
			// enable all recommended rules to warn
			...eslintPluginReadableTailwind.configs.warning.rules,
			// enable all recommended rules to error
			...eslintPluginReadableTailwind.configs.error.rules,
			'readable-tailwind/multiline': ['warn', { indent: 'tab' }],
			// 'readable-tailwind/no-unnecessary-whitespace': ['warn'],
			// 'readable-tailwind/sort-classes': ['warn', {
			// 	order: 'improved',
			// 	attributes: [
			// 		// ...getDefaultAttributes(),
			// 		// Add because of nuxt/ui
			// 		[
			// 			':classes', [
			// 				{
			// 					match: MatcherType.ObjectValue,
			// 					pathPattern: '^[a-zA-Z0-9_ ]*$|\\.[a-zA-Z0-9_ ]*$',
			// 				},
			// 			],
			// 		],
			// 		// Add because of nuxt/ui
			// 		[
			// 			':ui', [
			// 				{
			// 					match: MatcherType.ObjectValue,
			// 					pathPattern: '^[a-zA-Z0-9_ ]*$|\\.[a-zA-Z0-9_ ]*$',
			// 				},
			// 			],
			// 		],
			// 	],
			// 	callees: [
			// 		// ...getDefaultCallees(),
			// 		// Add support for tailwind variants tv({...})
			// 		[
			// 			'tv', [
			// 				{
			// 					match: MatcherType.ObjectValue,
			// 				},
			// 			],
			// 		],
			// 		[
			// 			'tv', [
			// 				{
			// 					match: MatcherType.String,
			// 				},
			// 			],
			// 		],
			// 	],
			// }],
			'tailwindcss/classnames-order': 'off',
			'tailwindcss/no-custom-classname': ['off'],
			'no-tabs': 'off',
			'no-console': 'off',
			'camelcase': 'off',
		},
	},
).override('nuxt/stylistic', {
	rules: {
		'@stylistic/no-trailing-spaces': ['off'],
		'@stylistic/no-multiple-empty-lines': ['off'],
		'@stylistic/linebreak-style': ['error', 'unix'],
		'@stylistic/indent': ['error', 'tab'],
	},
}).override('nuxt/typescript/rules', {
	rules: {
		'@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: true }],
		'@typescript-eslint/no-unused-vars': ['warn'],
	},
}).override('nuxt/vue/rules', {
	rules: {
		'vue/html-indent': ['error', 'tab'],
		'vue/no-v-html': 'off',
		'vue/html-closing-bracket-newline': 'error',
		'vue/require-default-prop': 'off',
		'vue/no-v-for-template-key': 'off',
		'vue/multi-word-component-names': ['off'],
	},
})
