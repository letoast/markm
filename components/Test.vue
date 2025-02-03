<script setup lang="ts">
import { getCollectionData } from '#pruvious/client'

const ads = await getCollectionData('ads')
</script>

<template>
	<div>
		<pre>
			{{ ads }}
		</pre>
		sdfsd
	</div>
</template>
