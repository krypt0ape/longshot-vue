<script setup>
import AppSidebarMenu from "@/components/AppSidebarMenu.vue";

const items = [
	{
		icon: "fa-solid fa-futbol",
		title: "Soccer",
		children:[
			{
				title: "Premier League",
			},
			{
				title: "La Liga",
			},
			{
				title: "View All",
			},
		]
	},
	{
		icon: "fa-solid fa-tennis-ball",
		title: "Tennis",
		children: [
			{
				title: "Wimbledon",
			},
			{
				title: "US Open",
			},
			{
				title: "View All",
			},
		]
	},
	{
		icon: "fa-solid fa-basketball",
		title: "Basketball",
		children: [
			{
				title: "NBA",
			},
			{
				title: "Euroleague",
			},
			{
				title: "View All",
			},
		]
	},
];
</script>
<template>
	<div class="mb-4">
		<AppSidebarMenu :items="items" heading="Top Sports" />
	</div>
</template>
<style></style>
