<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import PrimaryTab from "@/components/Tabs/PrimaryTab.vue";

const route = useRoute();

const items = computed(() => {
	return [
		{
			icon: 'fa-solid fa-globe',
			title: "Lobby",
			active: route.path.endsWith("/casino/home"),
			to: "/casino/home",
		},
		{
			icon: "fa-solid fa-game-board",
			title: "Games",
			active: route.path.endsWith("/casino/home/games"),
			to: "/casino/home/games",
		},
		{
			icon: 'fa-solid fa-slot-machine',
			title: "Slots",
			active: route.path.endsWith("/casino/home/slots"),
			to: "/casino/home/slots",
		},
		{
			icon: 'fa-solid fa-cards',
			title: "Casino",
			active: route.path.endsWith("/casino/home/casino"),
			to: "/casino/home/casino",
		},
		{
			icon: "fa-solid fa-gift",
			title: "Lottery",
			active: route.path.endsWith("/casino/home/lottery"),
			to: "/casino/home/lottery",
		},
		{
			icon: "fa-solid fa-rocket-launch",
			title: "New Releases",
			active: route.path.endsWith("/casino/home/new-releases"),
			to: "/casino/home/new-releases",
		},
	];
});
</script>
<template>
	<div class="grid grid-cols-6 space-x-4 max-w-7xl mx-auto py-[25px]">
		<PrimaryTab v-for="item in items" :key="item.title" :item="item" color="secondary"/>
	</div>
</template>
