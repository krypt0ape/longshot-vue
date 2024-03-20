<script setup>
import AppSidebarMenu from "@/components/AppSidebarMenu.vue";
const providerMenu = [
	{
		icon: "fa-solid fa-joystick",
		title: "Providers",
		to: "/casino/providers",
	},
];
</script>
<template>
	<div class="mb-4">
		<AppSidebarMenu :items="providerMenu" />
	</div>
</template>
