<script setup>
defineProps({
	items: {
		type: Array,
	},
});
</script>
<template>
	<div class="vertical-menu relative z-20 w-full font-medium">
		<RouterLink
			v-for="item in items"
			:key="item.title"
			:to="item.to"
			class="block px-8 py-3.5 text-sm"
			:class="[
				item.active ? 'bg-[#2c3e4e] text-white ' : 'text-brand-grey hover:text-white',
			]"
			>{{ item.title }}</RouterLink
		>
	</div>
</template>
<style scoped>
.vertical-menu {
	border-radius: 5px;
border: 1px solid rgba(61, 75, 89, 0.50);
background: linear-gradient(335deg, rgba(23, 31, 43, 0.50) 24.05%, rgba(44, 62, 78, 0.50) 61.46%);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}
</style>
