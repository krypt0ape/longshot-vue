<script setup>
import CryptoCurrencyIconsUsdt from "@/components/CryptoCurrencyIcons/Usdt.vue";

defineProps({
	symbol: "",
});
</script>
<template>
	<span>
		<CryptoCurrencyIconsUsdt v-if="symbol === 'USDT'" />
	</span>
</template>
