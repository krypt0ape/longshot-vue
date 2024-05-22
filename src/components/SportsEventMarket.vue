<script setup>
import SportsEventMarketLineOutcome from "@/components/SportsEventMarketLineOutcome.vue";
defineProps({
	market: {
		type: Object,
		required: true,
	},
});
</script>
<template>
	<div v-if="market.marketLines.length === 1" class="flex justify-between space-x-4">
		<div
			v-for="o in market.marketLines[0].marketLineOutcomes"
			class="capitalize flex-1 "
		>
			<SportsEventMarketLineOutcome
				:market-line-outcome="o"
				:competitors="market.marketLines[0].sportEvent.competitors"
			/>
		</div>
	</div>
</template>
