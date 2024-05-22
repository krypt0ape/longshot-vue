<script setup>
defineProps({
	market: {
		type: Object,
		required: true,
	},
})
</script>
<template>
	<div class="border border-white my-6">
		<pre>{{ market }}</pre>
	</div>
</template>