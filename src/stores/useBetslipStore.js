import { defineStore } from "pinia";
import { buildBetKey } from "@/utils/buildBetKey";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import useApiRequest from "@/composables/useApiRequest";
import { PLACE_BET } from "@/api/sportsbook";

export default defineStore("betslip", () => {
	const route = useRoute();
	const router = useRouter();

	const request = useApiRequest();

	const betslipOpen = computed(() => {
		return route.query.betslip === "open";
	});

	const toggleBetslip = () => {
		if (betslipOpen.value) {
			// close modal
			router.replace({ query: {} });
		} else {
			// open modal
			router.replace({ query: { betslip: "open" } });
		}
	};

	const betslip = ref({});

	const postBets = async () => {
		const req = await request(PLACE_BET(betslip.value));
		// Clear the betslip
		// Show place bet success / fail  message
	};

	const addToBetslip = (data) => {
		const {
			id,
			sportEventId,
			sportEventLabel,
			outcomeId,
			outcomeLabel,
			marketId,
			marketLabel,
			odds,
		} = data;
		// Create a unique key for the bet object
		const key = buildBetKey(sportEventId, outcomeId, marketId);
		// If the bet is already in the betslip,
		// remove it
		if (betslip.value[key]) {
			removeBet(key);
			return;
		}
		// Add the bet to the betslip
		betslip.value[key] = {
			id,
			sportEventId,
			outcomeId,
			marketId,
			sportEventLabel,
			outcomeLabel,
			marketLabel,
			amount: 100,
			ISO: "USD",
			odds,
		};
		if (!betslipOpen.value) {
			toggleBetslip();
		}
	};

	const removeBet = (betKey) => {
		delete betslip.value[betKey];
	};

	const updateBetAmount = ({ betKey, amount }) => {
		betslip.value[betKey].amount = amount;
	};

	return {
		betslipOpen,
		toggleBetslip,
		betslip,
		postBets,
		addToBetslip,
		removeBet,
		updateBetAmount,
	};
});
