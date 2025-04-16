<template>
	<div class="container mx-auto">
		<div
			class="
				prose
				sm:prose-xl
			"
		>
			<PruviousHTML :html="description" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { editorField } from '#pruvious'

defineProps({
	description: editorField({
		toolbar: ['bold', 'italic', 'heading2', 'heading3', 'paragraph', 'link', 'blockFormats', 'inlineFormats', 'clear'],
		required: true,
	}),
})
</script>
