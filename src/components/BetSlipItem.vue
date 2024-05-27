<script setup>
import useFormatOdds from "@/composables/useFormatOdds";

const props = defineProps({
	bet: {
		type: Object,
		required: true,
	},
});

const formatOdds = useFormatOdds(props.bet.odds);
</script>
<template>
	<div
		class="text-white my-4 py-4 border-b"
	>
		<p>{{ bet.sportEventLabel }}</p>
		<p>{{ bet.marketLabel }}</p>
		<p>{{ bet.outcomeLabel }}</p>
		<p>{{ formatOdds.odds.value }}</p>
	</div>
</template>
