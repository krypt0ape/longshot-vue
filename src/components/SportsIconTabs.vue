<script setup>

</script>
<template>
	<div class="flex space-x-4">
		<TabsSecondaryTab 
			:tab="{
				icon: 'fa-solid fa-futbol',
				title: 'Soccer',
				active: true,
				to: '/casino/home',
				total: 8
			}"
		/>
		<TabsSecondaryTab 
			:tab="{
				icon: 'fa-solid fa-tennis-ball',
				title: 'Tennis',
				active: false,
				to: '/casino/home',
				total: 18
			}"
		/>
		<TabsSecondaryTab 
			:tab="{
				icon: 'fa-solid fa-basketball',
				title: 'Basketball Basketball Basketball',
				active: false,
				to: '/casino/home',
				total: 8
			}"
		/>
		<TabsSecondaryTab 
			:tab="{
				icon: 'fa-solid fa-hockey-puck',
				title: 'Ice Hockey',
				active: false,
				to: '/casino/home',
				total: 8
			}"
		/>
	</div>
</template>