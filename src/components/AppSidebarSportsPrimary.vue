<script setup>
const items = [
	{
		icon: "fa-solid fa-circle-play",
		title: "Live Events",
		count: 34,
		to: "/casino/home",
	},
	{
		icon: "fa-solid fa-stopwatch",
		title: "Starting Soon",
		to: "/casino/home",
	},
	{
		icon: "fa-solid fa-receipt",
		title: "My Bets",
		to: "/casino/home",
	},
];
</script>
<template>
	<div class="mb-4">
		<AppSidebarMenu :items="items" />
	</div>
</template>
<style></style>
