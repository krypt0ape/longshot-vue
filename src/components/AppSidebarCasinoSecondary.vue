<script setup>
import AppSidebarMenu from "@/components/AppSidebarMenu.vue";
const items = [
	{
		icon: "fa-solid fa-slot-machine",
		title: "Slots",
		to: "/casino/home/slots",
	},
	{
		icon: "fa-solid fa-plane-departure",
		title: "Crash",
		to: "/casino/home/crash",
	},
	{
		icon: "fa-solid fa-gamepad",
		title: "Casual",
		to: "/casino/home/casual",
	},
	{
		icon: "fa-solid fa-game-board",
		title: "Mine",
		to: "/casino/home/mine",
	},

	{
		icon: "fa-solid fa-diamond-half-stroke",
		title: "Routellete",
		to: "/casino/home/routellete",
	},
	{
		icon: "fa-solid fa-cards",
		title: "Card",
		to: "/casino/home/card",
	},
	{
		icon: "fa-solid fa-dice",
		title: "Craps",
		to: "/casino/home/craps",
	},
	{
		icon: "fa-solid fa-gift",
		title: "Lottery",
		to: "/casino/home/lottery",
	},
];

</script>
<template>

	<div class="mb-4">
		<AppSidebarMenu heading="Games" :items="items" />
	</div>

</template>
