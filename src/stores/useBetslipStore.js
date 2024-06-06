import { defineStore } from "pinia";
import { buildBetKey } from "@/utils/buildBetKey";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import useApiRequest from "@/composables/useApiRequest";
import { PLACE_BET } from "@/api/sportsbook";
import useNotificationStore from "./useNotificationStore";
import forEach from "lodash/forEach";

export default defineStore("betslip", () => {
	const route = useRoute();
	const router = useRouter();

	const request = useApiRequest();
	const notificationStore = useNotificationStore();

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
		const totalBets = betslip.value.length;

		forEach(req.data, (bet, key) => {
			// Some bets may fail so how we handle this is only remove the 
			// succesfully placed bets from the betslip, some may have odds changes
			// to accept for example. If successBets !==  bets.length then we can
			// show a message to the user that some bets failed 
			if (bet.sucess) {
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
			notification.type= 'success';
			notification.title = "Bets Placed!"
			notification.message = 'All bets have been successfully placed, Good Luck!';
			// we can also close the betslip here as its probably not needed
			router.replace({ query: {} });
		}
		else if (successBets === 0)  {
			// All bets have failed
			notification.type= 'error';
			notification.title = "Unable to place bets!"
			notification.message = 'See the betslip for more information on each bet';
		}
		else {
			// Some bets have failed so we leave the betslip open so users can 
			// see the errors on each bet and we can show a message to the user
			notification.type= 'error';
			notification.title = "Unable to some of your bets!"
			notification.message = 'Unable to place ' + (totalBets - successBets) + ' bets, see the betslip for more info.';
		}

		notificationStore.addFlashNotification(notification);
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
			amount: 0,
			ISO: "USD",
			odds,
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
		changeBetSlipSubTab
	};
});
