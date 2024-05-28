<script setup>
import SportsEventMarketSingleMarketLine from "@/components/SportsEventMarketSingleMarketLine.vue";
import SportsEventMarketMultipleMarketLines from "@/components/SportsEventMarketMultipleMarketLines.vue";

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
	<SportsEventMarketSingleMarketLine
		v-if="market.marketLines.length === 1 && market.status === 0"
		:market="market"
		:event="event"
	/>
	<SportsEventMarketMultipleMarketLines
		v-else
		:market="market"
		:event="event"
	/>
</template>
