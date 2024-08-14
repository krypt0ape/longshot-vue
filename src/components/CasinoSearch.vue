<script setup>
import { ref } from "vue";
import SearchCommandPalette from "@/components/SearchCommandPalette.vue";
import useAsyncApi from "@/composables/useAsyncApi";
import CasinoGamesListItem from "@/components/CasinoGamesListItem.vue";

const term = ref("");

const { data, loading, call } = useAsyncApi("post", "/game-type/list");

const search = async () => {
	await call({
		data: {
			filters: {
				search: term.value,
			},
		},
	});
};
</script>
<template>
	<div class="mt-4">
		<SearchCommandPalette
			v-model="term"
			label="Search for a game"
			history-key="searchHistory"
			@search="search"
		>
			<div class="px-4 mt-4 flex gap-4 pt-4">
				<div v-if="loading" class="flex space-x-4 ">
					<div v-for="i in 5" :key="i" class=" w-[147px] h-[207px] rounded-xl animate-pulse bg-[#273646]">&nbsp;</div>
				</div>
				<CasinoGamesListItem
					v-else
					v-for="gameType in data?.rows"
					:key="gameType.identifier"
					:gameType="gameType"
				/>
			</div>
		</SearchCommandPalette>
	</div>
</template>
