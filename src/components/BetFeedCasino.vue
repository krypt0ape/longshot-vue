<script setup>
import BetFeed from "./BetFeed.vue";

const headings = [
	{ text: "Game", align: "left" },
	{ text: "User", align: "center" },
	{ text: "Time", align: "center" },
	{ text: "Bet Amount", align: "right" },
	{ text: "Mulitplier", align: "right" },
	{ text: "Payout", align: "right" },
];

const bets = [
	{
		bet: "Multi (18)",
		user: "John",
		time: "2:30 PM",
		odds: "1.5",
		betAmount: "100",
		betCurrency: "USDT",
	},
	{
		bet: "Multi (18)",
		user: "John",
		time: "2:30 PM",
		odds: "1.5",
		betAmount: "100",
		betCurrency: "USDT",
	},
	{
		bet: "Multi (18)",
		user: "John",
		time: "2:30 PM",
		odds: "1.5",
		betAmount: "100",
		betCurrency: "USDT",
	},
	{
		bet: "Multi (18)",
		user: "John",
		time: "2:30 PM",
		odds: "1.5",
		betAmount: "100",
		betCurrency: "USDT",
	},
	{
		bet: "Multi (18)",
		user: "John",
		time: "2:30 PM",
		odds: "1.5",
		betAmount: "100",
		betCurrency: "USDT",
	},
	{
		bet: "Multi (18)",
		user: "John",
		time: "2:30 PM",
		odds: "1.5",
		betAmount: "100",
		betCurrency: "USDT",
	},
];
</script>
<template>
	<BetFeed :headings="headings" :items="bets" />
</template>
