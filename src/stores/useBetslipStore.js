import { defineStore } from "pinia";
import { buildBetKey } from "@/utils/buildBetKey";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import useApiRequest from "@/composables/useApiRequest";
import { PLACE_BET } from "@/api/sportsbook";
import forEach from "lodash/forEach";
import { useNotification } from "@kyvg/vue3-notification";

export default defineStore("betslip", () => {
	const route = useRoute();
	const router = useRouter();
	const { notify } = useNotification();
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

	const betSlipTab = computed(() => {
		return route.query.betsliptab;
	});

	const changeBetSlipTab = (tab) => {
		const query = { ...route.query };
		query.betsliptab = tab;
		router.replace({ query });
	};

	const betSlipSubTab = computed(() => {
		return route.query.betslipsubtab;
	});

	const changeBetSlipSubTab = (tab) => {
		const query = { ...route.query };
		query.betslipsubtab = tab;
		router.replace({ query });
	};

	const betslip = ref({});

	const postBets = async () => {
		const req = await request(PLACE_BET(betslip.value));
		
		// Show place bet success / fail  message
		let sucessBets = 0;
		const totalBets = Object.keys(betslip.value).length;

	forEach(req.data, (bet, key) => {
			// Some bets may fail so how we handle this is only remove the 
			// succesfully placed bets from the betslip, some may have odds changes
			// to accept for example. If successBets !==  bets.length then we can
			// show a message to the user that some bets failed 
			if (bet.success) {
				sucessBets++;
				delete betslip.value[key];
			}
			else {
				betslip.value[key].error = bet.error;
			}
		});

		// Show a message to the user
		let notification;
		if(totalBets === sucessBets){
			// All bets have been successfully placed
			notify({
				type:'success',
				title: "Bets Placed!",
				text: "All bets have been successfully placed, Good Luck!",
				duration: 10000,
			});
			// we can also close the betslip here as its probably not needed
			router.replace({ query: {} });
		}
		else if (sucessBets === 0)  {
			// All bets have failed
			notify({
				type:'error',
				title: "Unable to place bets!",
				text: "See the betslip for more information on each bet",
				duration: 10000,
			});
		}
		else {
			console.log(totalBets, sucessBets);
			// Some bets have failed so we leave the betslip open so users can 
			// see the errors on each bet and we can show a message to the user
			notify({
				type:'error',
				title: "Unable to some of your bets!",
				text: "Unable to place " + (totalBets - sucessBets) + " bets, see the betslip for more info.",
				duration: 10000,
			});
		}
	};

	const addToBetslip = (data) => {
		// console.log(data)
		const {
			id,
			sportEventId,
			sportEventLabel,
			outcomeId,
			outcomeLabel,
			marketId,
			marketLabel,
			odds,
			specifiers
		} = data;
		// Create a unique key for the bet object
		const key = buildBetKey(sportEventId, outcomeId, marketId, specifiers);
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
			amount: 0,
			ISO: "USD",
			odds,
			specifiers
		};
		if (!betslipOpen.value) {
			toggleBetslip();
			router.replace({ 
				query : { betslip: 'open', betsliptab: 'betslip', betslipsubtab: 'single' }
			});
		}
	};

	const removeBet = (betKey) => {
		delete betslip.value[betKey];
	};

	const updateBetAmount = (betKey, amount) => {
		betslip.value[betKey].amount = parseFloat(amount);
	};

	const matchBetAmountOnAllBets = (amount) => {
		forEach(betslip.value, (bet, key) => {
			updateBetAmount(key, amount)
		 });
	}

	const clearBetslip = () => {
		betslip.value = {};
	}

	return {
		betslipOpen,
		toggleBetslip,
		betslip,
		postBets,
		addToBetslip,
		removeBet,
		updateBetAmount,
		betSlipTab, 
		changeBetSlipTab,
		betSlipSubTab,
		changeBetSlipSubTab,
		matchBetAmountOnAllBets,
		clearBetslip
	};
});
