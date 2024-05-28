<script setup>
import SportsEventMarketLineOutcome from "@/components/SportsEventMarketLineOutcome.vue";
import { computed } from "vue";
import reduce from "lodash/reduce";

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
	const col1 = reduce(props.market.marketLines, (res, item, key)=>{
		res.push(item.marketLineOutcomes[0]);
		return res;
	}, []);
	const col2 = reduce(props.market.marketLines, (res, item, key)=>{
		res.push(item.marketLineOutcomes[1]);
		return res;
	}, []);
	return { col1, col2 };
});
</script>
<template>
	<!-- <pre>{{ market }}</pre> -->
	<div :class="['grid gap-x-4 grid-cols-2']">
		<div class="grid grid-cols-1  gap-y-2">
			<div v-for="(o, key) in gridData.col1" :key="o.id" class="capitalize">
				<SportsEventMarketLineOutcome
					:market-line-outcome="o"
					:competitors="event.competitors"
					:market-id="market.id"
					:event="event"
					:sport-event-label="event.name"
					:market-label="market.name"
					:specifiers="market.marketLines[key].specifiers"
					:suspended="market.marketLines[key].status !== 1 || o.active !== 1"
				/>
			</div>
		</div>
		<div class="grid grid-cols-1  gap-y-2">
			<div v-for="(o, key) in gridData.col2" :key="o.id" class="capitalize">
				<SportsEventMarketLineOutcome
					:market-line-outcome="o"
					:competitors="event.competitors"
					:market-id="market.id"
					:event="event"
					:sport-event-label="event.name"
					:market-label="market.name"
					:specifiers="market.marketLines[key].specifiers"
					:suspended="market.marketLines[key].status !== 1 || o.active !== 1"
				/>
			</div>
		</div>
	</div>
</template>
