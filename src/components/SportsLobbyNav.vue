<script setup>
import { computed } from "vue";
import PrimaryTab from "@/components/Tabs/PrimaryTab.vue";

const items = computed(() => {
	return [
		{
			icon: 'fa-solid fa-globe',
			title: "Lobby",
			active: true,
			to: "/casino/home",
		},
		{
			icon: "fa-solid fa-receipt",
			title: "My Bets",
			active: false,
			to: "/casino/home",
		},
		{
			icon: 'fa-solid fa-star',
			title: "Favourites",
			active: false,
			to: "/casino/home",
		},
		{
			icon: 'fa-solid fa-circle-play',
			title: "Live Events",
			active: false,
			to: "/casino/home",
		},
		{
			icon: "fa-solid fa-stopwatch",
			title: "Starting Soon",
			active: false,
			to: "/casino/home",
		},
	];
});
</script>
<template>
	<div class="grid grid-cols-5 space-x-4 max-w-7xl mx-auto py-[25px]">
		<PrimaryTab v-for="item in items" :key="item.title" :item="item" />
	</div>
</template>
