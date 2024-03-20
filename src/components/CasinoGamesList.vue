<script setup>
//https://cdn.softswiss.net/i/s2/<provider>/<game.identifier>.png
import { ref, onMounted, computed } from "vue";
import useApi from "@/composables/useApi";
import VerticalScrollingList from "@/components/VerticalScrollingList.vue";
import CasinoGamesListItem from "@/components/CasinoGamesListItem.vue";

const props = defineProps({
	name: String,
	icon: String,
	filters: Array,
	limit: {
		type: Number,
		default: 20,
	},
});

const {loading, error, data} = useApi("post", "/game-type/list", {
	filters: props.filters,
	limit: props.limit,
});

const gameTypes = computed(()=>{
	if(! data.value) return [];
	return data.value.splice(2);
});
</script>
<template> 
	<VerticalScrollingList :name="name" :icon="icon">
		<CasinoGamesListItem
			v-for="gameType in gameTypes"
			:key="gameType.identifier"
			:gameType="gameType"
		/>
	</VerticalScrollingList>
</template>
