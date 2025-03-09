<template>
	<div>
		<div class="container prose mx-auto">
			<PruviousHTML :html="description" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { editorField } from '#pruvious'

defineProps({
	description: editorField({
		label: 'Product description',
		placeholder: 'Enter a description',
		blockFormats: [{ className: 'p-6 border rounded', label: 'Boxed', tags: ['div'] }],
		inlineFormats: [{ className: 'text-red-500', label: 'Red' }],
		toolbar: ['bold', 'italic', 'heading2', 'heading3', 'paragraph', 'link', 'blockFormats', 'inlineFormats', 'clear'],
		required: true,
	}),
})
</script>
