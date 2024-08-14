<script setup>
import useFormatOdds from "@/composables/useFormatOdds";
import Input from "./Form/Input.vue";
import {ref, computed, onMounted} from "vue";
import useBetslipStore from "@/stores/useBetslipStore";
import { buildBetKey } from "@/utils/buildBetKey";
import SelectedCurrencyIcon from "@/components/CryptoCurrencyIcons/SelectedCurrencyIcon.vue";

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
	const key = buildBetKey(props.bet.sportEventId, props.bet.outcomeId,  props.bet.marketId, props.bet.specifier);
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
					<div class="w-[150px]">
						<Input class="mt-1 " v-model="betAmount" >
							<!-- <div class="dollar-wrapper mt-0.5 mr-2 text-sm text-white rounded-full h-[20px] w-[20px] flex items-center justify-center">$</div> -->
							<p class='text-brand-grey mr-2 text-[16px] mt-0.5'>$</p>
						</Input>	
					</div>
					<div>
						<!-- TODO add icon for active currency -->
					</div>
					<a v-if="betAmount > 0" @click="matchBet" class="cursor-pointer pt-0.5" v-tippy="{ content: 'Repeat Stake On All Bets', placement: 'top' }">
						<i class="fa-solid fa-repeat fa-lg text-brand-grey "></i>
					</a>
				</div>
				<div  class='text-right'>
					<p class="text-sm text-brand-grey text-nowrap ">Est. Payout</p>
					<p class="font-bold text-brand-grey flex mt-0.5 ">${{payout}}<SelectedCurrencyIcon class="h-5 w-5 ml-2" /></p>
				</div>
			</div>
		</div>
		<div v-if="bet.error" class="border-dashed text-xs mx-4 mb-2 bg-brand-accentBgHeader px-3 py-2 text-brand-lightGrey border-2 border-red-700  rounded-lg">
			<p>{{bet.error}}</p>
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
.dollar-wrapper {
	background: linear-gradient(180deg, #4fa630 0%, #205e1d 100%);
	box-shadow: 0px 2px 0px 0px rgba(255, 255, 255, 0.1) inset,
		0px 1px 0px 0px rgba(0, 0, 0, 0.2);
}
</style>
