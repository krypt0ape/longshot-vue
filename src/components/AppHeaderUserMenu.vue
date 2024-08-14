<script setup>
import { computed } from "vue";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import AppHeaderUserMenuItem from "./AppHeaderUserMenuItem.vue";
import useAuthModals from "@/composables/useAuthModals";
import useUserStore from "@/stores/useUserStore";
import Avatar from "vue-boring-avatars";
import useRiskManagementStore from "@/stores/useRiskManagementStore";
import useBetslipStore from "@/stores/useBetslipStore";

const userStore = useUserStore();
const { toggleSignoutModal } = useAuthModals();
const openWallet = () => {};

const riskManagementStore = useRiskManagementStore();
const store = useBetslipStore();
const user = computed(() => userStore.user);
</script>
<template>
	<div class="flex items-center">
		<div class="mr-6">
			<a
				@click="store.toggleBetslip"
				class="cursor-pointer"
				v-tippy="{
					content: 'Bet Slip',
					placement: 'left',
				}"
			>
				<i
		
					class="fa-solid fa-receipt text-brand-grey text-2xl cursor-pointer"
				></i>
			</a>
		</div>

		<Popover v-slot="{ open }" class="relative">
			<PopoverButton
				:class="open ? 'text-white' : 'text-white/90'"
				class="group inline-flex items-center rounded-md focus:ring-0 focus:ring-offset-0 px-3 py-2 text-base font-medium hover:text-white bg-[#071420] border border-[#273646] focus:outline-none focus-visible:ring-0"
			>
				<!--  TODO user avatars -->
				<!-- <img
					:src="user.picture"
					:alt="user.username"
					class="w-8 h-8 rounded-full"
				/> -->
				<Avatar
					:size="30"
					variant="beam"
					:name="user.username"
					:colors="['#3AAA35', '#A4ADBD']"
				/>

				<p class="ml-3 font-medium hidden lg:block">{{ user.username }}</p>
				<ChevronDownIcon
					class="ml-2 h-6 w-6 transition duration-150 ease-in-out text-brand-darkerGrey"
					aria-hidden="true"
				/>
			</PopoverButton>

			<transition
				enter-active-class="transition duration-200 ease-out"
				enter-from-class="translate-y-1 opacity-0"
				enter-to-class="translate-y-0 opacity-100"
				leave-active-class="transition duration-150 ease-in"
				leave-from-class="translate-y-0 opacity-100"
				leave-to-class="translate-y-1 opacity-0"
			>
				<PopoverPanel
					class="absolute right-0 z-10 mt-3 w-[200px] transform px-4 sm:px-0"
				>
					<div
						class="overflow-hidden border border-[#273646] rounded-lg shadow-lg text-brand-dark font-medium py-2 bg-[#182330] text-brand-lightGrey"
					>
						<div class="pb-2 border-b border-[#273646]">
							<AppHeaderUserMenuItem
								@click="riskManagementStore.toggleWalletModal"
								icon="fa-solid fa-wallet"
								text="Wallet"
							/>
							<AppHeaderUserMenuItem
								to="/"
								icon="fa-solid fa-receipt"
								text="My Bets"
							/>
						</div>
						<div class="border-b border-[#273646] py-2">
							<AppHeaderUserMenuItem
								to="/"
								icon="fa-solid fa-messages"
								text="Messages"
							/>
							<AppHeaderUserMenuItem
								to="/"
								icon="fa-solid fa-trophy"
								text="VIP Club"
							/>
							<AppHeaderUserMenuItem
								to="/"
								icon="fa-solid fa-users-rays"
								text="Affiliate"
							/>
						</div>
						<div class="py-2 border-b border-[#273646]">
							<AppHeaderUserMenuItem
								to="/"
								icon="fa-solid fa-user"
								text="Profile"
							/>
							<AppHeaderUserMenuItem
								to="/"
								icon="fa-solid fa-list"
								text="Transactions"
							/>
							<AppHeaderUserMenuItem
								to="/"
								icon="fa-solid fa-chart-line-up"
								text="Statistics"
							/>
							<AppHeaderUserMenuItem
								to="/"
								icon="fa-solid fa-headset"
								text="Support"
							/>
						</div>
						<div class="pt-2">
							<AppHeaderUserMenuItem
								:action="toggleSignoutModal"
								icon="fa-solid fa-sign-out-alt"
								text="Signout"
							/>
						</div>
					</div>
				</PopoverPanel>
			</transition>
		</Popover>
	</div>
</template>
