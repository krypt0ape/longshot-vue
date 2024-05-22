<script setup>
import { marketLineLabel } from "@/utils/marketLineLabel";

defineProps({
	marketLineOutcome: {
		type: Object,
		required: true,
	},
	competitors: {
		type: Array,
		required: true,
	},
});
</script>
<template>
	<div
		class="cursor-pointer hover:bg-brand-accentBgHeader transition sports-event-market-line-outcome flex justify-between py-[12px] px-[16px] w-full"
	>
		<p v-if="marketLineOutcome.outcome" class="text-brand-lightGrey font-semibold">
			{{ marketLineLabel(marketLineOutcome.outcome.name, competitors) }}
		</p>
		<!-- TODO user preference odds format -->
		<p class="green-gradient-text font-semibold">
			{{ marketLineOutcome.odds }}
		</p>
	</div>
</template>
<style>
.sports-event-market-line-outcome {
	border-radius: 10px;
	border: 1px solid #273646;
	background: #071420;
}
</style>
