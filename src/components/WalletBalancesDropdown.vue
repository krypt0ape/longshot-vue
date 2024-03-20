<script setup>
import { useAuth0 } from "@auth0/auth0-vue";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

const openWallet = () => {};
</script>
<template>
	<div>
		<Popover v-slot="{ open }" class="relative">
			<PopoverButton
				:class="open ? 'text-white' : 'text-white/90'"
				class="group wallet-balances-dropdown-button inline-flex items-center  px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-0"
			>
				<CryptoCurrencyIconsUsdt />
				<p class="ml-3 font-medium">$0.00</p>
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
						class="overflow-hidden rounded-lg shadow-lg text-brand-dark font-medium px-4 py-2 bg-white"
					>
						<div class="flex justify-between">
							<p>$0.00</p>
							<p>BTC</p>
						</div>
						<div class="flex justify-between">
							<p>$0.00</p>
							<p>ETH</p>
						</div>
						<div class="flex justify-between">
							<p>$0.00</p>
							<p>USDT</p>
						</div>
					</div>
				</PopoverPanel>
			</transition>
		</Popover>
	</div>
</template>
<style>
.wallet-balances-dropdown-button {
	border-radius: 5px;
	border: 1px solid rgba(61, 75, 89, 0.5);
	background: linear-gradient(335deg, #171f2b 24.05%, #2c3e4e 61.46%);
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}
</style>
