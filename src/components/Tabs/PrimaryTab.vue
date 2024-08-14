<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const props = defineProps({
	item: {
		type: Object,
		required: true,
	},
	color: {
		type: String,
		default: "primary",
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	inline: {
		type: Boolean,
		default: false,
		description: "If true, the tab text and icon will be displayed inline",
	},
	background: {
		type: String,
		default: "#0e1725",
		description: "The background color of the tab",
	},
	size: {
		type: String,
		default: "md",
		description: "The size of the tab",
		validator(value) {
			return ["sm", "md"].includes(value);
		},
	},
});

const svgFill = computed(() => {
	return props.color === "primary" ? "#38A433" : "#FA00FF";
});

const tabBorder = computed(() => {
	if (props.item.active) {
		return props.color === "primary"
			? "background: linear-gradient(180deg, #38A433 0%, " +
					props.background +
					" 100%);"
			: "background: linear-gradient(180deg, #FA00FF 0%, " +
					props.background +
					" 100%);";
	}

	return false;
});

const tabBackground = computed(() => {
	if (props.item.active) {
		return props.color === "primary"
			? "background: linear-gradient(180deg, #203e33 0%, " +
					props.background +
					" 100%);"
			: "background: linear-gradient(180deg, #6A2B74 0%," +
					props.background +
					" 100%);";
	}

	return (
		"background: linear-gradient(180deg, #182330 0%, " +
		props.background +
		" 100%);"
	);
});
</script>
<template>
	<RouterLink
		:to="item.to ?? route.path"
		:scrollToTop="false"
		@click="item.action"
		:disabled="disabled"
	>
		<div
			:class="[
				'cursor-pointer transform rounded-t-lg overflow-hidden group p-[1px]',
				item.active ? 'text-white' : 'text-brand-darkerGrey',
			]"
			:style="tabBorder"
		>
			<div
				class="rounded-t-lg w-full h-full flex items-center justify-center"
				:class="{
					'py-[13px]': size === 'md',
					'py-[10px]': size === 'sm',
				}"
				:style="tabBackground"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="199"
					height="36"
					viewBox="0 0 199 36"
					fill="none"
					:class="[
						item.active ? '' : '-translate-y-[35px]',
						'absolute  z-10 top-0 mx-auto transition ease-in duration-100  group-hover:translate-y-0 ',
					]"
				>
					<g filter="url(#filter0_f_186_1312)">
						<ellipse
							cx="99.5"
							cy="-7.48156"
							rx="77.5"
							ry="21.5184"
							:fill="svgFill"
							fill-opacity="0.36"
						/>
					</g>
					<defs>
						<filter
							id="filter0_f_186_1312"
							x="0.481562"
							y="-50.5184"
							width="198.037"
							height="86.0737"
							filterUnits="userSpaceOnUse"
							color-interpolation-filters="sRGB"
						>
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="BackgroundImageFix"
								result="shape"
							/>
							<feGaussianBlur
								stdDeviation="10.7592"
								result="effect1_foregroundBlur_186_1312"
							/>
						</filter>
					</defs>
				</svg>
				<div class="relative z-20">
					<h4
						:class="{
							'text-xl': size === 'md',
							'text-md': size === 'sm',
							'flex items-center gap-x-3': inline,
						}"
						class="text-center font-display font-semibold  tracking-widest uppercase group-hover:text-white transition ease-in duration-100"
					>
						<div>
							<i
								v-if="item.icon"
								:class="item.icon"
								class="mb-[5px] mx-auto"
							/>
						</div>
						{{ item.title }}
					</h4>
				</div>
			</div>
		</div>
	</RouterLink>
</template>
<style>
.primary-tab-item {
	background: linear-gradient(180deg, #182330 0%, #07111b 100%);
}

.primary-tab-item:hover {
	background: linear-gradient(180deg, #203e33 0%, #07111b 100%);
}
</style>
