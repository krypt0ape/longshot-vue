<script setup>
defineProps({
	icon: {
		type: String,
		required: true,
	},
})
</script>
<template>
	<ClientOnly>
		<font-awesome-icon :icon="icon" v-bind="$attrs" />
	</ClientOnly>
</template>