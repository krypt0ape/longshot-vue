<script setup>
import WalletBalancesDropdown from "./WalletBalancesDropdown.vue";
import PrimaryButton from "./Buttons/PrimaryButton.vue";
import { useAuth0 } from "@auth0/auth0-vue";
const { isAuthenticated } = useAuth0();
</script>
<template>
	<div v-if="isAuthenticated" class=" h-full ">
		<div class="hidden sm:flex  items-center space-x-4">
			<WalletBalancesDropdown />
			<PrimaryButton>
				Wallet
			</PrimaryButton>
		</div>
	 	<div class="sm:hidden flex space-x-4 items-center">
			<p class="text-white">0.00</p>
			<i class="fa-solid fa-wallet text-brand-grey"></i>
		</div>
	</div>
</template>
