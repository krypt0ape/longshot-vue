<script setup>
import SportsEventMarketLineOutcome from "@/components/SportsEventMarketLineOutcome.vue";
import { computed } from "vue";
import reduce from "lodash/reduce";
import forEach from "lodash/forEach";

const props = defineProps({
	market: {
		type: Object,
		required: true,
	},
	event: {
		type: Object,
		required: true,
	},
});

const gridData = computed(() => {
	return reduce(
		props.market.marketLines,
		(res, item, key) => {
			forEach(item.marketLineOutcomes, (outcome, index) => {
				if (outcome) {
					if (res[key] === undefined) res[key] = [];
					if (res[key][index] === undefined) res[key][index] = [];
					res[key][index] = {
						Outcome: outcome,
						MarketLine: item,
					};
				}
			});
			return res;
		},
		[]
	);
});
</script>
<template>
	<div
		class="grid gap-x-4"
		:class="[gridData.length > 2 ? 'grid-cols-3' : 'grid-cols-2']"
	>
		<!-- <pre>{{ market }}</pre> -->
		<div v-for="(gridItem, key) in gridData" :key="key" class="  ">
			<div v-for="(o, key2) in gridItem" :key="key2" class="capitalize mb-2">
				<SportsEventMarketLineOutcome
					v-if="o.Outcome"
					:market-line-outcome="o.Outcome"
					:competitors="event.competitors"
					:market-id="market.id"
					:event="event"
					:sport-event-label="event.name"
					:market-label="market.name"
					:specifiers="o.MarketLine?.specifiers"
					:suspended="o.MarketLine?.status !== 1 || o.Outcome.active !== 1"
				/>
				<!-- <pre v-else>{{ o }}</pre> -->
			</div>
		</div>
	</div>
	<!-- <pre v-else>{{ market}}</pre> -->
</template>
