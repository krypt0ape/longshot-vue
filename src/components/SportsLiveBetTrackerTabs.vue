<script setup>
import TabsPrimaryTab from "@/components/Tabs/PrimaryTab.vue";
  const options = [
	{ id: 1, name: 'Show 20' },
	{ id: 2, name: 'Show 50' },
	{ id: 3, name: 'Show 100' },
  ]
</script>
<template>
<div class="flex max-w-4xl ">
	<div class="flex-1 grid grid-cols-3 space-x-4">
		<TabsPrimaryTab 
			:item="{
				title: 'All bets',
				active: true,
				to: '/casino/home',
			}"
		/>
		<TabsPrimaryTab 
			:item="{
				title: 'High Rollers',
				active: false,
				to: '/casino/home',
			}"
		/>
		<TabsPrimaryTab 
			:item="{
				title: 'Leaderboard',
				active: false,
				to: '/casino/home',
			}"
		/>
	</div>
	<div class="flex items-center ml-[75px]">
		<FormSelect :options="options" />
	</div>
</div>
</template>
