<script setup>
import { computed } from "vue";
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";
import SecondaryButton from "@/components/Buttons/SecondaryButton.vue";

const props = defineProps({
	promotion: {},
	color: {
		type: String,
		default: "primary",
	},
});
const background = computed(() => {
	return {
		backgroundImage: `linear-gradient(144deg, #2B3848 20.45%, #07111B 78.97%),url("${props.promotion.image}")`,
	};
});
const summary = computed(() => {
	return props.promotion.summary.substring(0, 35);
});

const border = computed(() => {
	return props.color === "primary"
		? "background: linear-gradient(180deg, #38A433 0%, #203e33 100%);"
		: "background: linear-gradient(180deg, #FA00FF 0%, #6A2B74 100%);";
});
</script>
<template>
	<div :style="border" :class="['rounded-lg w-full h-full relative']">
		<div
			:style="background"
			class="sports-promo-box m-[1px] relative h-[205px] p-[16px] flex flex-col rounded-lg overflow-hidden"
		>
			<img
				:src="promotion.image"
				class="w-[900px] -right-[100px] top-0 absolute z-10 opacity-10"
			/>
			<div
				:class="[
					'sports-promo-box-label absolute top-[16px] left-[16px] border rounded-full z-30  px-[16px] py-[6px]  flex items-center justify-center  bg-brand-accentBgHeader',
					props.color === 'primary'
						? 'border-brand-green'
						: 'border-brand-purple',
				]"
			>
				<h4
					:class="[
						props.color === 'primary'
							? 'text-brand-green '
							: 'purple-gradient-text',
						'tracking-widest font-display font-bold ',
					]"
				>
					PROMO
				</h4>
			</div>
			<div class="flex-1 flex items-end relative z-30 mb-2">
				<div class="overflow-hidden mb-[15px]">
					<p class="text-white font-semibold text-lg">
						{{ promotion.title }}
					</p>
					<p class="truncate text-brand-darkerGrey">
						{{ summary }}...
						<RouterLink :to="promotion.to" class="hover:text-white"
							>Read More</RouterLink
						>
					</p>
				</div>
			</div>
			<div v-if="promotion.betLink" class="relative z-30 pb-2">
				<PrimaryButton
					v-if="props.color === 'primary'"
					:to="promotion.betLink"
					as="RouterLink"
					>Bet Now</PrimaryButton
				>
				<SecondaryButton
					v-else
					:to="promotion.betLink"
					as="RouterLink"
					>Bet Now</SecondaryButton
				>
			</div>
		</div>
	</div>
</template>
<style>
.sports-promo-box {
	/* border-radius: 10px; */
	/* border-style: solid; */
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
}
.sports-promo-box-label {
	border-radius: 100px;
	/* border: 1px solid var(--Pre-Title, #68d763); */
}

.sports-promo-box-wrapper {
	background-clip: padding-box;
	border: solid 1px transparent;
	position: relative;
}

.sports-promo-box-border::before {
	content: "";
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: -1;
	margin: -1px;
	border-radius: inherit;
}

.sports-promo-box-border-primary::before {
	background: linear-gradient(to bottom, #4fa630, rgba(79, 166, 48, 0.3));
}
.sports-promo-box-border-secondary::before {
	background: linear-gradient(to bottom, #fa00ff, rgba(250, 0, 255, 0.3));
}
</style>
