<script setup>
import SportsEventMarketLineOutcome from "@/components/SportsEventMarketLineOutcome.vue";
defineProps({
	market: {
		type: Object,
		required: true,
	},
	event: {
		type: Object,
		required: true,
	},
});
</script>
<template>
	<div
		v-if="market.marketLines.length === 1"
		:class="[
			'grid gap-x-4 gap-y-2',
			market.marketLines[0].marketLineOutcomes.length > 2
					? 'grid-cols-3'
					: 'grid-cols-2',
		]"
	>
		<div
			v-for="o in market.marketLines[0].marketLineOutcomes"
			:key="o.id"
			:class="[
				'capitalize',
			]"
		>
			<SportsEventMarketLineOutcome
				:market-line-outcome="o"
				:competitors="event.competitors"
				:market-id="market.id"
				:event="event"
				:sport-event-label="event.name"
				:market-label="market.name"
			/>
		</div>
	</div>
	<pre v-else>{{market}}</pre>
</template>
