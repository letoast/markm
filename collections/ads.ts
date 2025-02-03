import { defineCollection } from '#pruvious'

export default defineCollection({
	name: 'ads',
	mode: 'multi',
	translatable: true,
	apiRoutes: {
		read: 'public',
		readMany: 'public',
	},
	fields: {
		title: {
			type: 'text',
			options: {
				required: false,
			},
		},
		video: {
			type: 'text',
			options: {
				required: true,
			},
		},
		image: {
			type: 'image',
			options: {
				required: false,
			},
		},
		tags: {
			type: 'record',
			options: {
				collection: 'tags',
				placeholder: 'Add tags',
				required: false,
			},
		},
		status: {
			type: 'select',
			options: {
				choices: {
					published: 'Published',
					draft: 'Draft',
				},
				required: true,
			},
		},
	},
})
