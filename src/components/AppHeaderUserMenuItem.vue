<script setup>
const props = defineProps({
	icon: {},
	to: {},
	action: {},
	text:{}
});

const classList = "block cursor-pointer py-2 px-4 hover:bg-[#2D3E4F] transition";
</script>
<template>
	<NuxtLinkLocale v-if="props.to" :to="props.to" :class="classList">
		<FontAwesome :icon="props.icon" class="mr-3 w-[20px]" /> {{props.text}}
	</NuxtLinkLocale>
	<a v-else @click="openWallet" :class="classList">
		<FontAwesome :icon="props.icon" class="mr-3" /> {{props.text}}
	</a>
</template>
