<script setup>
import WalletBalancesDropdown from "./WalletBalancesDropdown.vue";
import PrimaryButton from "./Buttons/PrimaryButton.vue";
import { useAuth0 } from "@auth0/auth0-vue";
const { isAuthenticated } = useAuth0();

</script>
<template>
	<div v-if="isAuthenticated" class="flex items-center h-full space-x-4">
		<WalletBalancesDropdown />
		<PrimaryButton>Wallet</PrimaryButton>
	</div>
</template>