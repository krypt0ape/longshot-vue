<script setup>
import { computed, ref } from "vue";

const props = defineProps({
	gameType: Object,
});

const image = computed(() => {
	return `https://cdn.softswiss.net/i/s4/${props.gameType.providerIdentifier}/${props.gameType.identifier2}.png`;
});

const url = computed(() => {
	return `/casino/games/${props.gameType.identifier}`;
});

const element = ref(null);

const emit = defineEmits({
	favourite: [],
});
</script>
<template>
	<RouterLink :to="url" ref="element" class="relative w-[155px]">
		<i
			v-if="props.gameType.favoured"
			class="fa-solid fa-star absolute top-1 left-1 text-xl text-yellow-600 text-white rounded-md p-1 z-50 cursor-pointer"
		></i>
		<img
			:src="image"
			class="w-full h-[207px] rounded-xl transition shadow-lg ease-in-out duration-300 hover:-translate-y-3 cursor-pointer"
		/>
		<p class="w-[150px] flex items-center mt-2 justify-center text-sm">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="12"
				height="13"
				viewBox="0 0 12 13"
				fill="none"
			>
				<circle
					cx="6"
					cy="6.5"
					r="5"
					fill="url(#paint0_linear_619_2322)"
					stroke="#142C13"
					stroke-width="2"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_619_2322"
						x1="6"
						y1="2.5"
						x2="6"
						y2="10.5"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#68D763" />
						<stop offset="1" stop-color="#3AAA35" />
					</linearGradient>
				</defs>
			</svg>
			<span class="mx-2 font-semibold text-brand-lightGrey">2,542</span
			><span class="text-brand-light text-brand-darkerGrey">Playing</span>
		</p>
	</RouterLink>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
