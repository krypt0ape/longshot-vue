<script setup>
import { ref, onMounted, computed } from "vue";
import CasinoProviders from "@/components/CasinoProviders.vue";
import CasinoSearch from "@/components/CasinoSearch.vue";
import useApi from "@/composables/useApi";
import PageHeader from "@/components/PageHeader.vue";
import { useRoute } from "vue-router";
import CasinoGamesGrid from "@/components/CasinoGamesGrid.vue";
import CasinoGameProvidersSelect from "@/components/CasinoGameProvidersSelect.vue";
import CasinoGameSortBySelect from "@/components/CasinoGameSortBySelect.vue";

const route = useRoute();
const heading = computed(() => {
	// replace - in url wtih space
	const name = route.params.type?.replace(/-/g, " ") ?? "";
	return name;
});

const providers = ref([]);
const sortBy = ref('az');

const refetch = ()=> {
	// TODO replace this with the refetch function of useApi 
}

const filters = computed(()=>{
	return {
		categories: [route.params.type],
		providers: providers.value.length ? providers.value : null,
	}
});

const sort = computed(()=>{
	switch(sortBy.value){
		case 'az':
			return { title: "DESC" }
		case 'za':
			return { title: "ASC" }
		case 'popular':
			return { popularity: "DESC" }
		case 'featured':
			return { featured: "DESC" }
		case 'newest':
			return { createdAt: "DESC" }
	}
})

const updateProvders = (identifier) => {
	if(! identifier){
		providers.value = [];
		return;
	}
	if (providers.value.includes(identifier)) {
		providers.value = providers.value.filter((id) => id !== identifier);
	} else {
		providers.value.push(identifier);
	}
}


</script>
<template>
	<div>
		<PageHeader>{{ heading }}</PageHeader>
		<img
			src="/img/PURPLE-GLOW-TOP.png"
			class="absolute -top-[125px] mx-auto left-0 right-0 opacity-75"
		/>
		<div class="mx-auto max-w-7xl relative">
			<div class="py-2">
				<CasinoSearch />
			</div>
			<div class="flex justify-between mt-6">
				<div class="flex items-center">
					<p class="text-brand-grey text-lg font-medium mr-4"><i class="fa-solid fa-filter-list mr-2"></i>Filter By</p>
					<CasinoGameProvidersSelect :selected="providers"  @update="updateProvders" @close="refetch" />
				</div>
				<div class="flex items-center">
					<p class="text-brand-grey text-lg font-medium mr-4"><i class="fa-solid fa-arrow-down-arrow-up mr-2"></i>Sort By</p>
					<CasinoGameSortBySelect :selected="sortBy" @update:selected="val => sortBy = val" @close="refetch"  />
				</div>
			</div>
			<!-- Games Filters -->
			<!-- Games Sort -->
			<!-- Games List  -->
			<CasinoGamesGrid
				:key="route.params.type"
				:filters="filters"
				:sort="sort"
				:limit="100"
			/>
		
			<!-- Load More Games -->
			<div class="pt-12">
				<CasinoProviders />
			</div>
			<!-- Bet Feed -->
		</div>
	</div>
</template>
