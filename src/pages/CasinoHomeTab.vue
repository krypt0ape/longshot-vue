<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import CasinoGamesGrid from "@/components/CasinoGamesGrid.vue";
import CasinoProviders from "@/components/CasinoProviders.vue";

const route = useRoute();
const pageData = computed(() => {
	switch (route.params.tab) {
		case "casino":
			return {
				filters: {
					category: ["roulette", "card", "craps"],
				},
				name: "Casino",
				icon: "fa-solid fa-cards",
			};
		case "slots":
			return {
				filters: {
					category: ["slots"],
				},
				name: "Slots",
				icon: "fa-solid fa-slot-machine",
			};
		case "games":
			return {
				filters: {
					category: ["casual", "crash", "mines"],
				},
				name: "Games",
				icon: "fa-solid fa-gamepad",
			};
		case "lottery":
			return {
				filters: {
					category: ["lottery"],
				},
				name: "Lottery",
				icon: "fa-solid fa-gift",
			};
		case "new-releases":
			return {
				filters: ["new-releases"],
				name: "New Releases",
				icon: "fa-solid fa-rocket-launch",
			};
		default:
			return null;
	}
});
</script>
<template>
	<div>
		<div class="">
			<div class="flex items-center mb-6 mt-4">
				<i :class="pageData.icon" class="text-brand-darkerGrey text-xl" />
				<h3 class="text-white font-semibold text-2xl px-4">{{ pageData.name }}</h3>
			</div>
			<CasinoGamesGrid
				v-if="pageData"
				:filters="pageData.filters"
				:limit="21"
			/>
		</div>
		<!-- Providers -->
		<div class="pt-12">
			<CasinoProviders />
		</div>
	</div>
</template>
