<script setup>
import {computed} from 'vue';

const props = defineProps({
	provider: Object,
});

const image = computed(() => {
	return `https://cdn.softswiss.net/logos/providers/white/${props.provider.identifier}.svg`;
});	
</script>
<template>
	<div class="flex flex-col cursor-pointer items-center relative transition justify-center px-4 opacity-[0.6] hover:opacity-[0.8]">
		<img :src="image" class="mx-auto" />
		<slot />
	</div>
</template>