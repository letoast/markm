<script setup lang="ts">
const { data: ads } = await useFetch('/api/ads', {
	transform: data => data?.records,
})
</script>

<template>
	<section>
		<div class="container mx-auto">
			<div class="grid grid-cols-3 gap-4">
				<AdCard
					v-for="ad in ads"
					:key="ad.id"
					:ad="ad"
				/>
			</div>
		</div>
	</section>
</template>
