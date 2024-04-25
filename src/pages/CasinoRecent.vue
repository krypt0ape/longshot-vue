<script setup>
import { ref, onMounted, computed } from "vue";
import CasinoProvidersLogo from "@/components/CasinoProvidersLogo.vue";
import CasinoSearch from "@/components/CasinoSearch.vue";
import BetFeedCasino from "@/components/BetFeedCasino.vue";
import CasinoGamesGrid from "@/components/CasinoGamesGrid.vue";
import PageHeader from "@/components/PageHeader.vue";
import useRecentyPlayed from "@/composables/useRecentlyPlayed";
import useApi from "@/composables/useApi";
import CasinoGamesListItem from "@/components/CasinoGamesListItem.vue";
import AsyncContent from "@/components/AsyncContent.vue";

const { list } = useRecentyPlayed();

const { data, refetch, loading } = useApi("post", "/game-type/list", {
	data: {
		filters: {
			identifiers: list.value,
		},
	},
});

const sortedGames = computed(() => {
	if (data && data.value?.count) {
		return data.value.rows.sort((a, b) => {
			return (
				list.value.indexOf(a.identifier) - list.value.indexOf(b.identifier)
			);
		});
	}
	return [];
});
</script>
<template>
	<div>
		<PageHeader>Recently Played</PageHeader>
		<img
			src="/img/PURPLE-GLOW-TOP.png"
			class="absolute -top-[125px] mx-auto left-0 right-0 opacity-75"
		/>
		<div class="max-w-7xl mx-auto relative">
			<div class="py-2">
				<CasinoSearch v-model="search" />
			</div>
			<div class="mt-8">
				<AsyncContent :loading="loading" :error="error">
					<template #loader>
						<div class="flex space-x-4">
							<div
								v-for="i in 8"
								:key="i"
								class="rounded-xl animate-pulse bg-[#273646] h-[207px] w-[147px]"
							>
								&nbsp;
							</div>
						</div>
					</template>
					<div class="flex flex-wrap gap-6">
						<CasinoGamesListItem
							v-for="gameType in sortedGames"
							:key="gameType.identifier"
							:game-type="gameType"
						/>
					</div>
				</AsyncContent>

				<div class="my-4 text-lg text-brand-grey text-center pb-8 pt-8">
					<p v-if="sortedGames.length">Displaying {{ data.count }} games</p>
					<p v-else-if="! loading && ! error">
						<em>No games have been played yet.</em>
					</p>
				</div>
			</div>
			<div class="">
				<BetFeedCasino />
			</div>
		</div>
	</div>
</template>

<style scoped>
.header-row {
	background: #0b1825;
	box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
}
</style>
