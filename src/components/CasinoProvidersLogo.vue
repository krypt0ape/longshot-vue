<script setup>
import { computed } from "vue";

const props = defineProps({
	provider: Object,
});

const image = computed(() => {
	return `https://cdn.softswiss.net/logos/providers/white/${props.provider.identifier}.svg`;
});
</script>
<template>
	<RouterLink
		:to="`/casino/providers/${props.provider.identifier}`"
		class="flex flex-col bg-brand-accentBgHeader rounded-xl cursor-pointer items-center relative transition justify-center px-4 py-2 opacity-[0.6] hover:opacity-[0.8]"
	>
		<img :src="image" class="" />
		<slot />
	</RouterLink>
</template>
<style>

</style>
