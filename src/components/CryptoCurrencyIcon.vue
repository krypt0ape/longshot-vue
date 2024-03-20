<script setup>
defineProps({
	symbol: "",
});
</script>
<template>
	<span>
		<CryptoCurrencyIconsUsdt v-if="symbol === 'USDT'" />
	</span>
</template>
