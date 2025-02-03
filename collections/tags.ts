import { defineCollection } from '#pruvious'

export default defineCollection({
	name: 'tags',
	mode: 'multi',
	translatable: true,
	fields: {
		title: {
			type: 'text',
			options: {
				required: false,
			},
		},
	},
})
