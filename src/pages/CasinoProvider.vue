<script setup>
import PageHeader from "@/components/PageHeader.vue";
import CasinoGamesGrid from "@/components/CasinoGamesGrid.vue";
import CasinoProviders from "@/components/CasinoProviders.vue";
import BetFeedCasino from "@/components/BetFeedCasino.vue";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import useApi from "@/composables/useApi";

const route = useRoute();

const filters = ref({
	providers: [route.params.provider],
});

const {data, loading} = useApi("GET", "/provider/" + route.params.provider);
</script>
<template>
	<div class="max-w-7xl mx-auto">
		<PageHeader :loading="loading">{{ data?.title }}</PageHeader>
		<img
			src="/img/PURPLE-GLOW-TOP.png"
			class="absolute -top-[120px] mx-auto left-0 right-0 opacity-75"
		/>
		<div class="pt-8">
			<!-- Games List  -->
			<CasinoGamesGrid
				:key="route.params.provider"
				ref="grid"
				:filters="filters"
			/>
		</div>

		<!-- Load More Games -->
		<div class="pt-12">
			<CasinoProviders />
		</div>
		<!-- Bet Feed -->
		<div class="">
			<BetFeedCasino />
		</div>
	</div>
</template>
