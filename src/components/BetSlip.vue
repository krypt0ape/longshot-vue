<script setup>
import useBetslipStore from "@/stores/useBetslipStore";
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";
import BetSlipItem from "@/components/BetSlipItem.vue";

const store = useBetslipStore();

</script>
<template>
	<transition name="slide">
		<aside
			v-if="store.betslipOpen"
			class="sticky top-0 bottom-0 w-[330px] px-[30px] py-[30px] bg-brand-accentBgHeader h-screen flex flex-col justify-between"
		>
			<div>
				<p class="text-xl text-white">BetSlip</p>
				<BetSlipItem v-for="(bet, key) in store.betslip" :key="key" :bet="bet" />
			</div>
			<PrimaryButton @click="store.postBets" class="mt-[15px]">Place Bets</PrimaryButton>
		</aside>
	</transition>
</template>
<style scoped>
.slide-enter-active,
.slide-leave-active {
	transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
	transform: translateX(100%);
}
.slide-enter-to,
.slide-leave-from {
	transform: translateX(0);
}
</style>
