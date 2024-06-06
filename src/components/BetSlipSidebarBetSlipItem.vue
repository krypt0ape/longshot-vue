<script setup>
import useFormatOdds from "@/composables/useFormatOdds";
import Input from "./Form/Input.vue";
import {ref, computed, onMounted} from "vue";
import useBetslipStore from "@/stores/useBetslipStore";
import { buildBetKey } from "@/utils/buildBetKey";

const props = defineProps({
	bet: {
		type: Object,
		required: true,
	},
});

const store = useBetslipStore();
const formatOdds = useFormatOdds(props.bet.odds);


const betAmount = computed({
  get: () => props.bet.amount,
  set: (value) => {
	const key = buildBetKey(props.bet.sportEventId, props.bet.outcomeId,  props.bet.marketId);
	if(value > 0){
		store.updateBetAmount(key, value);
	}else{
		store.updateBetAmount(key, 0);
	}
  },
});

const payout = computed(() => {
	return (betAmount.value * formatOdds.odds.value).toFixed(2);
});

const removeBet = () => {
	store.addToBetslip({
		sportEventId: props.bet.sportEventId, 
		outcomeId: props.bet.outcomeId, 
		marketId: props.bet.marketId,
	});
};

const matchBet = () => {
	store.matchBetAmountOnAllBets(props.bet.amount);
};


</script>
<template>
	<div  class="betslip-item mb-4 overflow-hidden">
		<div
			class="bg-brand-accentBgHeader h-[40px] flex items-center justify-between px-[16px]"
		>
			<p class="text-brand-grey font-medium text-sm">{{ bet.sportEventLabel }}</p>
			<a class="cursor-pointer" @click="removeBet">
				<i class="fa-solid fa-times text-brand-grey text-xl"></i>
			</a>
		</div>
		<div class="px-[16px] py-[10px]  text-lg">
			<div class="flex justify-between text-sm">
				<div >
					<p class="text-brand-grey">{{ bet.marketLabel }}</p>
					<p class="text-white font-medium">{{ bet.outcomeLabel }}</p>
				</div>
				<div>
					<p>&nbsp;</p>
					<p class="green-gradient-text font-bold">
						{{ formatOdds.odds.value }}
					</p>
				</div>
			</div>
			<div class="flex justify-between mt-1 text-sm">
				<div class='flex items-center gap-x-2'>
					<div class="w-[120px]">
						<Input class="mt-1 " v-model="betAmount" />
					</div>
					<div>
						<!-- TODO add icon for active currency -->
					</div>
					<a v-if="betAmount > 0" @click="matchBet" class="cursor-pointer" v-tippy="{ content: 'Repeat Stake On All Bets', placement: 'top' }">
						<i class="fa-solid fa-repeat fa-lg text-brand-lightGrey"></i>
					</a>
				</div>
				<div  class='text-right'>
					<p class="text-sm text-brand-grey text-nowrap ">Est. Payout</p>
					<p class="font-bold text-brand-grey">{{payout}}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.betslip-item {
	border-radius: 5px;
	border: 1px solid rgba(61, 75, 89, 0.5);
	background: linear-gradient(335deg, #171f2b 24.05%, #2c3e4e 61.46%);
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}
</style>
