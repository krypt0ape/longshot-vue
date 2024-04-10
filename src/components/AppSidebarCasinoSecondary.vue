<script setup>
import AppSidebarMenu from "@/components/AppSidebarMenu.vue";
const items = [
	{
		icon: "fa-solid fa-slot-machine",
		title: "Slots",
		to: "/casino/group/slots",
	},
	{
		icon: "fa-solid fa-plane-departure",
		title: "Crash",
		to: "/casino/group/crash",
	},
	{
		icon: "fa-solid fa-gamepad",
		title: "Casual",
		to: "/casino/group/casual",
	},
	{
		icon: "fa-solid fa-game-board",
		title: "Mine",
		to: "/casino/group/mine",
	},

	{
		icon: "fa-solid fa-diamond-half-stroke",
		title: "Routellete",
		to: "/casino/group/routellete",
	},
	{
		icon: "fa-solid fa-cards",
		title: "Card",
		to: "/casino/group/card",
	},
	{
		icon: "fa-solid fa-dice",
		title: "Craps",
		to: "/casino/group/craps",
	},
	{
		icon: "fa-solid fa-gift",
		title: "Lottery",
		to: "/casino/group/lottery",
	},
];

</script>
<template>

	<div class="mb-4">
		<AppSidebarMenu heading="Games" :items="items" />
	</div>

</template>
