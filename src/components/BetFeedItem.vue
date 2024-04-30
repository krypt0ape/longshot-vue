<script setup>
import CryptoCurrencyIcon from "@/components/CryptoCurrencyIcon.vue";
const props = defineProps({
	bet: Object,
	alignment: Array,
	index: Number
});
</script>
<template>
	<div
		:class="[
			'grid grid-cols-6 py-[15px] px-[25px]',
			index % 2 === 0 ? 'bg-brand-accentBgHeader' : 'bg-brand-darker',
		]"
	>
		<div>
			<p
				class="text-brand-lightGrey font-semibold"
				:class="{
					'text-right': alignment[0] === 'right',
					'text-center': alignment[0] === 'center',
					'text-left': alignment[0] === 'left',
				}"
			>
				{{ bet.bet }}
			</p>
		</div>
		<div>
			<p
				class="text-brand-darkerGrey font-semibold"
				:class="{
					'text-right': alignment[1] === 'right',
					'text-center': alignment[1] === 'center',
					'text-left': alignment[1] === 'left',
				}"
			>
				{{ bet.user }}
			</p>
		</div>
		<div>
			<p
				class="text-brand-darkerGrey"
				:class="{
					'text-right': alignment[2] === 'right',
					'text-center': alignment[2] === 'center',
					'text-left': alignment[2] === 'left',
				}"
			>
				{{ bet.time }}
			</p>
		</div>
		<div>
			<p
				class="text-brand-darkerGrey"
				:class="{
					'text-right': alignment[3] === 'right',
					'text-center': alignment[3] === 'center',
					'text-left': alignment[3] === 'left',
				}"
			>
				{{ bet.odds }}
			</p>
		</div>
		<div
			class="flex justify-end space-x-2 items-center"
			:class="{
				'text-right': alignment[4] === 'right',
				'text-center': alignment[4] === 'center',
				'text-left': alignment[4] === 'left',
			}"
		>
			<p class="text-brand-darkerGrey text-right">
				{{ bet.betAmount }}
			</p>
			<CryptoCurrencyIcon :symbol="bet.betCurrency" />
		</div>
	</div>
</template>
<style></style>
