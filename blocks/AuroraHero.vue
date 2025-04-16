<script lang="ts" setup>
import { editorField, imageField } from '#pruvious'

defineProps({
	content: editorField({
		label: 'Content',
		toolbar: ['bold', 'italic', 'heading1', 'heading2', 'heading3', 'paragraph', 'link', 'blockFormats', 'inlineFormats', 'clear'],
		required: true,
	}),
	image: imageField({
		label: 'Image',
		required: false,
	}),
})
</script>

<template>
	<UiAuroraBackground
		class="
			justify-start
			sm:justify-center
		"
	>
		<div
			class="
				relative container mx-auto flex flex-col-reverse items-center gap-8
				sm:flex-row
			"
		>
			<div
				class="
					text-center
					sm:-mt-0 sm:basis-1/2
				"
			>
				<PruviousHTML
					class="
						prose mb-4
						sm:prose-2xl
					"
					:html="content"
				/>
				<NuxtLink
					to="#work"
				>
					<UiInteractiveHoverButton
						text="See my work"
					/>
				</NuxtLink>
			</div>
			<div
				class="
					-scale-x-100
					[mask-image:linear-gradient(white_50%,transparent)]
					sm:basis-1/2
				"
			>
				<PruviousImage
					:image="image"
				/>
			</div>
		</div>
	</UiAuroraBackground>
</template>
