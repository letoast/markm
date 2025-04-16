<script setup lang="ts">
import { motion } from 'motion-v'
import type { InternalApi } from 'nitropack/types'

defineProps<{
	ad: InternalApi['/api/ads']['get']['records'][number]
}>()
</script>

<template>
	<motion.div
		class="box"
		:while-hover="{ scale: 1.1 }"
	>
		<UCard
			:ui="{
				body: 'p-0 sm:p-0',
				root: 'overflow-hidden shadow-xl',
			}"
		>
			<template #header>
				<div>
					{{ ad.title }}
				</div>
				<div class="flex flex-wrap gap-2">
					<UButton
						v-for="tag in ad.tags"
						:key="tag?.title"
						variant="soft"
						size="xs"
					>
						{{ tag?.title }}
					</UButton>
				</div>
			</template>

			<div>
				<ScriptYouTubePlayer
					class="h-full"
					:video-id="ad.video"
				>
					<!-- <template #placeholder>
						<PruviousImage
							:src="ad.image"
							aspect-ratio="4:5"
							class="h-full"
						/>
					</template> -->
					<!-- <template #awaitLoading>
						<div
							class="
								flex h-full w-full items-center justify-center rounded-xl bg-transparent
								p-20
							"
						>
							<UIcon name="tabler:player-play-filled" />
						</div>
					</template> -->
				</ScriptYouTubePlayer>
			</div>
		</UCard>
	</motion.div>
</template>
