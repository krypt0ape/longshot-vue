<script setup>
import { useAuth0 } from "@auth0/auth0-vue";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import AppHeaderUserMenuItem from "./AppHeaderUserMenuItem.vue";
const { user, logout } = useAuth0();
const _logout = () => {
	logout({ logoutParams: { returnTo: window.location.origin } });
};
const openWallet = () => {};
</script>
<template>
	<div class="flex items-center ">
		<div class="mr-6">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="18"
				viewBox="0 0 18 18"
				fill="none"
				class="cursor-pointer"
				v-tippy="{
							content: 'Bet Slip',
							placement: 'left',
						}"
			>
				<g clip-path="url(#clip0_676_3754)">
					<path
						d="M0.000274658 0.998195V3.0007H2.00277V17.003H3.75046C3.96927 16.1249 4.75059 15.4848 5.68152 15.4848C6.12456 15.4849 6.55489 15.6329 6.90422 15.9054C7.25355 16.1779 7.50187 16.5593 7.60977 16.9889L7.61259 17.0024H10.4178C10.6366 16.1244 11.4179 15.4843 12.3488 15.4843C12.7919 15.4843 13.2222 15.6324 13.5715 15.9048C13.9209 16.1773 14.1692 16.5587 14.2771 16.9884L14.2799 17.0019H16.0124V2.99957H17.9997V0.99707L0.000274658 0.998195ZM9.99759 11.4984H5.00259V9.9982H9.99759V11.4984ZM12.998 7.5007H5.00315V6.00051H12.998V7.5007Z"
						fill="#A4ADBD"
					/>
				</g>
				<defs>
					<clipPath id="clip0_676_3754">
						<rect width="18" height="18" fill="white" />
					</clipPath>
				</defs>
			</svg>
		</div>

		<Popover v-slot="{ open }" class="relative">
			<PopoverButton
				:class="open ? 'text-white' : 'text-white/90'"
				class="group inline-flex items-center rounded-md focus:ring-0 focus:ring-offset-0 px-3 py-2 text-base font-medium hover:text-white bg-[#071420] border border-[#273646] focus:outline-none focus-visible:ring-0"
			>
				<img
					:src="user.picture"
					:alt="user.nickname"
					class="w-8 h-8 rounded-full"
				/>
				<p class="ml-3 font-medium hidden lg:block">{{ user.nickname }}</p>
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
								@click="openWallet"
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
								:action="_logout"
								icon="fa-solid fa-sign-out-alt"
								text="Logout"
							/>
						</div>
					</div>
				</PopoverPanel>
			</transition>
		</Popover>
	</div>
</template>
