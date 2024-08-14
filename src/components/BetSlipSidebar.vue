<script setup>
import useBetslipStore from "@/stores/useBetslipStore";
import PrimaryTab from "@/components/Tabs/PrimaryTab.vue";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import BetSlipSidebarBetSlip from "@/components/BetSlipSidebarBetSlip.vue";
import BetSlipBadge from "@/components/BetslipBadge.vue";
import BetSlipSidebarMyBets from "@/components/BetSlipSidebarMyBets.vue";

const store = useBetslipStore();

const active = ref("betslip");
</script>
<template>
	<transition name="slide">
		<aside
			v-if="store.betslipOpen"
			class="sticky top-0 bottom-0 w-[370px] bg-brand-accentBgHeader h-screen flex flex-col justify-start"
		>
			<div
				class="bg-brand-bodyBg  flex items-center justify-between h-[70px] flex-none _betslip-header px-[16px]"
			>
				<Menu as="div" class="relative inline-block text-left">
					<MenuButton class="flex items-center">
						<p class="text-brand-lightGrey tracking-wide font-semibold text-lg">
							<!-- <i class="fa-solid fa-receipt text-brand-grey mr-[10px]"></i> -->
							Bet Slip
						</p>
						<BetSlipBadge />
						<i class="fa-solid fa-chevron-down ml-3 text-brand-grey" />
					</MenuButton>
					<MenuItems
						class="absolute dark-gradient-bg left-4 z-10 mt-2 w-[150px] origin-top-right rounded-md bg-brand-accentBgHeader text-brand-lightGrey shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
					>
						<div class="">
							<MenuItem>
								<a
									@click="active = 'betslip'"
									class="block px-4 py-2 flex items-center hover:bg-brand-bodyBg rounded-md cursor-pointer"
									>Bet Slip <BetSlipBadge
								/></a>
							</MenuItem>
							<MenuItem>
								<a
									@click="active = 'mybets'"
									class="block px-4 py-2 flex items-center hover:bg-brand-bodyBg rounded-md cursor-pointer"
									>My Bets</a
								>
							</MenuItem>
						</div>
					</MenuItems>
				</Menu>
				<a @click="store.toggleBetslip" class="cursor-pointer">
					<i class="fa-solid fa-times text-brand-grey text-2xl"></i>
				</a>
			</div>
			<div class="relative flex-1">
				<transition name="fade">
				<BetSlipSidebarBetSlip v-if="active === 'betslip'" />
				</transition>
				<transition name="fade">
					<BetSlipSidebarMyBets v-if="active === 'mybets'" />
				</transition>
			</div>
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
._betslip-header {
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
	opacity: 1;
}
</style>
