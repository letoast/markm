<script setup lang="ts">
import type { Image } from '#pruvious'

defineProps<{
	ad: {
		title: string
		video: string
		image: Image | null
	}
}>()
</script>

<template>
	<UCard
		:ui="{
			strategy: 'override',
			ring: 'ring-1 ring-gray-200',
			shadow: 'shadow-lg hover:shadow-3xl',
			base: 'overflow-hidden hover:scale-105 transition-all duration-100 ease-out',
			body: {
				base: 'grid',
				padding: 'p-0',
			},
		}"
	>
		<template #header>
			{{ ad.title }}
		</template>

		<div>
			<LazyYoutube
				:src="ad.video"
				aspect-ratio="4:5"
				class="h-full"
				:custom-thumbnail="ad?.image?.src"
				:show-title="false"
			>
				<template #button>
					<div
						class="p-20 bg-transparent flex items-center justify-center w-full h-full rounded-xl"
					>
						<UIcon name="tabler:player-play-filled" />
					</div>
				</template>
			</LazyYoutube>
		</div>
	</UCard>
</template>
