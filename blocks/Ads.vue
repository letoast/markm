<script setup lang="ts">
const { data: ads } = await useFetch('/api/ads', {
	transform: data => data?.records,
})
</script>

<template>
	<section id="work">
		<div class="container mx-auto">
			<div
				class="
					grid grid-cols-1 gap-4
					lg:grid-cols-3 lg:gap-8
					2xl:grid-cols-4
				"
			>
				<AdCard
					v-for="ad in ads"
					:key="ad.id"
					:ad="ad"
				/>
			</div>
		</div>
	</section>
</template>
