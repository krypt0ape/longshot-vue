<script setup>
import useBetslipStore from "@/stores/useBetslipStore";
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";
import BetSlipSidebarBetSlipItem from "@/components/BetSlipSidebarBetSlipItem.vue";
import PrimaryTab from "@/components/Tabs/PrimaryTab.vue";
import { computed, ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import reduce from "lodash/reduce";
import useAsync from "@/composables/useAsync";
import Async from "@/components/Async.vue";
import SelectedCurrencyIcon from "@/components/CryptoCurrencyIcons/SelectedCurrencyIcon.vue";
import useUserStore from "@/stores/useUserStore";
import useAuthModals from "@/composables/useAuthModals";

const store = useBetslipStore();
const route = useRoute();
const router = useRouter();
const userStore = useUserStore();

const { call, loading, error } = useAsync(store.postBets);

const items = computed(() => {
	return [
		{
			icon: "fa-solid fa-ticket",
			title: "Single",
			active: true,
			action: () => {},
		},
		{
			icon: "fa-solid fa-tickets",
			title: "Multi",
			active: route.path.endsWith("/sports/home"),
			to: "/sports/home",
		},
	];
});

const totalStake = computed(() => {
	return reduce(
		store.betslip,
		(acc, bet) => {
			return acc + bet.amount;
		},
		0
	).toFixed(2);
});
const estPayout = computed(() => {
	return reduce(
		store.betslip,
		(acc, bet) => {
			return acc + bet.amount * bet.odds;
		},
		0
	).toFixed(2);
});

const el = ref(null);
watch(store.betslip, () => {
	// This scrolls down to the bottom of the betslip so the user can see the
	// new bet entering the betslip. The reason we need to use a timeout is
	// if we trigger this instantly, the el height is not updated yet.
	setTimeout(() => {
		// Added if here as the "betslip empty" element doesn't have the ref="el"
		if(el.value){
			el.value.scrollTo({ top: el.value.scrollHeight, behavior: "smooth" });
		}
	}, 200);
});

const betsHaveZeroValue = computed(() => {
	return Object.values(store.betslip).some((bet) => bet.amount === 0);
});

const canPlaceBet = computed(() => {
	if (betsHaveZeroValue.value) return false;
	if(Object.keys(store.betslip).length === 0) return false;
	return true;
});

const  {toggleSigninModal} = useAuthModals();
</script>
<template>
	<div
		class="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between h-full"
	>
		<div class="grid grid-cols-2 gap-x-4 px-4 bg-brand-sidebarBg pt-[20px]">
			<PrimaryTab
				v-for="item in items"
				:key="item.title"
				:item="item"
				:inline="true"
				color="primary"
				background="#071420"
				size="sm"
			>
				<h4
					class="text-center flex font-display font-semibold items-center uppercase group-hover:text-white transition ease-in duration-100"
				>
					<i class="mx-auto mr-3" :class="item.icon" />
					<p>{{ item.title }}</p>
				</h4>
			</PrimaryTab>
		</div>

		<div class="flex justify-between pt-2 pb-2 bg-brand-sidebarBg px-4">
			<div></div>
			<div>
				<a
					v-if="Object.keys(store.betslip).length"
					@click="store.clearBetslip"
					class="hover:text-white text-brand-grey cursor-pointer transition uppercase text-xs tracking-wide font-semibold"
					>Clear Betslip</a
				>
			</div>
		</div>

		<div v-if="Object.keys(store.betslip).length" ref="el" class="px-4 flex-1 bg-brand-sidebarBg overflow-scroll">
			<transition-group name="betslip-item" tag="div">
				<BetSlipSidebarBetSlipItem
					v-for="(bet, key) in store.betslip"
					:key="key"
					:bet="bet"
				/>
			</transition-group>
		</div>
		<div v-else class="flex-1 bg-brand-sidebarBg px-4 flex items-center justify-center">
			<div class="text-center">
				<i class="fa-regular fa-tickets text-3xl  mb-2 text-brand-grey "></i>
				<p class="text-brand-lightGrey text-center font-semibold">Bet Slip is empty</p>
				<p class="text-brand-grey">Please add a selection to place a bet</p>
			</div>
		</div>
		<div
			class="dark-gradient-bg text-sm _betslipsidebar-betslip-bottom px-4 py-4 text-brand-grey"
		>
			<div class="flex justify-between">
				<p class="font-medium">Total Stake</p>
				<p class="tracking-wider font-semibold flex">
					${{ totalStake }} <SelectedCurrencyIcon class="h-5 w-5 ml-2 mt-0.5" />
				</p>
			</div>
			<div class="flex justify-between mt-0.5">
				<p class="font-medium">Est. Payout</p>
				<p class="text-brand-lightGrey tracking-wider font-semibold flex">
					${{ estPayout }} <SelectedCurrencyIcon class="h-5 w-5 ml-2 mt-0.5" />
				</p>
			</div>
			<div
				v-if="betsHaveZeroValue"
				class="border-dashed text-sm bg-brand-accentBgHeader px-3 py-2 text-brand-lightGrey border-2 border-red-700 mt-2 rounded-lg"
			>
				<p>
					The minimum bet stake is <strong>$0.05</strong>, please update your
					stakes.
				</p>
			</div>
			<PrimaryButton v-if="!userStore.user" class="mt-[15px] !w-full" @click="toggleSigninModal" clover
				>Login To Place Bets</PrimaryButton
			>
			<PrimaryButton
				v-else
				@click="call"
				class="mt-[15px] !w-full"
				:disabled="!canPlaceBet"
				clover
			>
				<Async :loading="loading" :error="error" errorType="notification">
					Place Bets
				</Async>
			</PrimaryButton>
		</div>
	</div>
</template>
<style scoped>
.betslip-item-enter-active,
.betslip-item-leave-active {
	transition: transform 0.2s ease-out, opacity 0.2s ease-out;
}
.betslip-item-enter-from {
	transform: translateY(6%);
	opacity: 0;
}
.betslip-item-leave-to {
	transform: translateY(-6%);
	opacity: 0;
}
.betslip-item-enter-to,
.betslip-item-leave-from {
	transform: translateY(0);
	opacity: 1;
}
._betslip-badge {
	display: flex;
	padding: 4px;
	justify-content: center;
	align-items: center;
	border-radius: 75px;
	height: 22px;
	width: 22px;
	background: linear-gradient(180deg, #68d763 0%, #3aaa35 100%);
}
</style>
