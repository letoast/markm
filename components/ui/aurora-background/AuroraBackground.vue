<script setup lang="ts">
import { cn } from '@/lib/utils'

interface AuroraBackgroundProps {
	radialGradient?: boolean
	class?: string
}

const props = withDefaults(defineProps<AuroraBackgroundProps>(), {
	radialGradient: true,
})
</script>

<template>
	<main>
		<div
			v-bind="props"
			:class="
				cn(
					`
						transition-bg relative flex h-[100vh] flex-col items-center justify-center
						bg-gray-100 text-slate-950
					`,
					props.class,
				)
			"
		>
			<div class="absolute inset-0 overflow-hidden">
				<div
					style="--white: var(--neutral-100)"
					:class="
						cn(
							`
								will-change-transform; pointer-events-none absolute -inset-[10px]
								opacity-50 blur-[10px] invert filter
								dark:invert-0
							`,
							`
								[--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
							`,
							`
								[--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
							`,
							`
								[--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
							`,
							`
								[background-image:var(--white-gradient),var(--aurora)]
								[background-size:300%,_200%]
								[background-position:50%_50%,50%_50%]
								dark:[background-image:var(--dark-gradient),var(--aurora)]
							`,
							`
								after:absolute after:inset-0
								after:[background-image:var(--white-gradient),var(--aurora)]
								after:[background-size:200%,_100%] after:[background-attachment:fixed]
								after:mix-blend-difference after:content-['']
								after:dark:[background-image:var(--dark-gradient),var(--aurora)]
							`,
							'aurora-gradient-animation',
							props.radialGradient
								&& `
									[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]
								`,
						)
					"
				/>
			</div>
			<slot />
		</div>
	</main>
</template>

<style scoped>
.aurora-gradient-animation::after {
  animation: animate-aurora 60s linear infinite;
}

@keyframes animate-aurora {
  0% {
    background-position:
      50% 50%,
      50% 50%;
  }
  100% {
    background-position:
      350% 50%,
      350% 50%;
  }
}
</style>
