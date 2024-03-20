<script setup>
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
		<AppSidebarMenu :items="items">
			<h3 class="px-4 font-medium  pt-[10px] text-brand-lightGrey text- mb-1">Top Sports</h3>
		</AppSidebarMenu>
	</div>
</template>
<style></style>
