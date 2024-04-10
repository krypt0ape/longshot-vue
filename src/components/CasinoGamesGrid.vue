<script setup>
import { computed } from "vue";
import useApi from "@/composables/useApi";
import CasinoGamesListItem from "@/components/CasinoGamesListItem.vue";
import useAsyncApi from "@/composables/useAsyncApi";
import { watch } from "vue";

const props = defineProps({
	name: String,
	icon: String,
	filters: Array,
	sort: Object,
	limit: { type: Number, default: 20 },
});

const { data, refetch } = useApi("post", "/game-type/list", {
	filters: props.filters,
	limit: props.limit,
	sort: props.sort ? props.sort : { createdAt: "DESC" },
});

const { call: toggleFavourite } = useAsyncApi("POST", "/game-type/favourite");

const favourite = async (identifier) => {
	await toggleFavourite(identifier);
	refetch();
};
</script>

<template>
	<div class="flex flex-wrap gap-6">
		<CasinoGamesListItem
			v-for="gameType in data?.rows"
			:key="gameType.identifier"
			:game-type="gameType"
			@favourite="() => favourite(gameType.identifier)"
		/>
	</div>
</template>
