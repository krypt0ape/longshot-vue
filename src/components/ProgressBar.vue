<script setup>
const props = defineProps({
	fillPercent: Number
});
</script>
<template>
<div class="relative">
	<div class="absolute left-0 top-0 h-[8px] w-full rounded-xl rounded-xl bg-brand-accentStroke">&nbsp;</div>
	<div class="absolute left-0 top-0 h-[8px] rounded-xl green-gradient-bg" :style="{width: props.fillPercent + '%'}">&nbsp;</div>
</div>
</template>
<style scoped>

</style>