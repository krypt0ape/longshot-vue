<script setup>
import { marketName, eventName } from "@/utils/radarHelpers";
import useBetslipStore from "@/stores/useBetslipStore";
import { computed, onMounted } from "vue";
import useFormatOdds from "@/composables/useFormatOdds";
import { buildBetKey } from "@/utils/buildBetKey";

const store = useBetslipStore();

const props = defineProps({
	marketLineOutcome: {
		type: Object,
		required: true,
	},
	competitors: {
		type: Array,
		required: true,
	},
	marketLabel: {
		type: String,
		required: true,
	},
	marketId: {
		type: Number,
		required: true,
	},
	event: {
		type: Object,
		required: true,
	},
	specifiers: {
		type: String,
		required: false,
	},
	suspended: {
		type: Boolean,
		required: false,
	},
});

const formatOdds = useFormatOdds(props.marketLineOutcome.odds);

const addToBetslip = () => {
	console.log(props);
	if (props.suspended) return;
	store.addToBetslip({
		id: props.marketLineOutcome.id,
		specifiers: props.specifiers,
		sportEventId: props.event.id,
		sportEventLabel: eventName(props.event),
		marketId: parseInt(props.marketId),
		marketLabel: marketName(
			props.marketLabel,
			props.event.competitors,
			props.specifiers
		),
		outcomeId: parseInt(props.marketLineOutcome.outcomeId),
		outcomeLabel: outcomeLabel.value,
		odds: parseFloat(props.marketLineOutcome.odds),
	});
};

const outcomeLabel = computed(() => {
	if (!props.marketLineOutcome.outcome) return "";
	const label = marketName(
		props.marketLineOutcome.outcome.name,
		props.competitors,
		props.specifiers
	);
	return label.charAt(0).toUpperCase() + label.slice(1);
});

const isOutcomeInBetslip = computed(() => {
	const key = buildBetKey(
		props.event.id,
		props.marketLineOutcome.outcomeId,
		props.marketId,
		props.specifiers
	);
	return (store.betslip[key]);
});
</script>
<template>
	<div
		@click="addToBetslip"
		class="sports-event-market-line-outcome py-[12px] px-[16px] w-full"
		:class="[
			suspended
				? 'cursor-not-allowed'
				: 'cursor-pointer hover:bg-brand-accentBgHeader transition ',
		]"
		v-tippy="{ content: outcomeLabel, placement: 'top' }"
	>
		<div v-if="suspended" class="flex justify-between">
			<p class="text-brand-darkGrey font-semibold">Suspended</p>
		</div>
		<div v-else class="flex justify-between">
			<p
				v-if="marketLineOutcome.outcome"
				class="text-brand-lightGrey font-semibold truncate pr-2"
			>
				{{ outcomeLabel }}
			</p>
			<p v-if="isOutcomeInBetslip">
				<i class="fa-solid fa-check green-gradient-text"></i>
			</p>
			<p v-else class="green-gradient-text font-semibold">
				{{ formatOdds.odds.value }}
			</p>
		</div>
	</div>
</template>
<style>
.sports-event-market-line-outcome {
	border-radius: 10px;
	border: 1px solid #273646;
	background: #071420;
}
</style>
