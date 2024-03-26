<script setup>
defineProps({
	loading: Boolean,
})
</script>
<template>
	<div>
		<div v-if="loading" class="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center">
			<img src="/img/ColorWhite_Full.png" class="animate-pulse w-[150px]"/>
		</div>
		<slot v-else />
	</div>
</template>