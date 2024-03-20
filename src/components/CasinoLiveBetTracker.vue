<script setup>
</script>
<template>
	<div class="mt-[60px] mb-[60px]">
		<SportsLiveBetTrackerTabs />
		<div class="grid grid-cols-5 mt-[30px] mb-[20px] mx-[25px]">
			<div>
				<h4 class="text-brand-darkerGrey font-semibold">Event</h4>
			</div>
			<div>
				<h4 class="text-brand-darkerGrey font-semibold">User</h4>
			</div>
			<div>
				<h4 class="text-brand-darkerGrey font-semibold">Time</h4>
			</div>
			<div>
				<h4 class="text-brand-darkerGrey font-semibold">Odds</h4>
			</div>
			<div>
				<h4 class="text-brand-darkerGrey font-semibold text-right">Bet Amount</h4>
			</div>
		</div>
		<SportsLiveBetTrackerTable />
	</div>
</template>
