<script setup>
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
	<div  
		v-for="(bet, index) in bets" 
		:class="[
			'grid grid-cols-5 py-[15px] px-[25px]',
			(index % 2 === 0) ? 'bg-brand-dark' : 'bg-brand-darker'
		]"
	>
		<div>
			<h4 class="text-brand-lightGrey font-semibold">{{ bet.bet }}</h4>
		</div>
		<div>
			<h4 class="text-brand-darkerGrey font-semibold">{{ bet.user }}</h4>
		</div>
		<div>
			<h4 class="text-brand-darkerGrey ">{{ bet.time }}</h4>
		</div>
		<div>
			<h4 class="text-brand-darkerGrey ">{{ bet.odds }}</h4>
		</div>
		<div class="flex justify-end space-x-2 items-center">
			<h4 class="text-brand-darkerGrey  text-right">
				{{ bet.betAmount }}
			</h4>
			<CryptoCurrencyIcon :symbol=" bet.betCurrency" />
		</div>
	</div>
</template>
<style></style>
