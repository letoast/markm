// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
	rules: {
		'indent': ['error', 'tab'],
		'no-tabs': 'off',
		'vue/multi-word-component-names': 'off',
	},
})
