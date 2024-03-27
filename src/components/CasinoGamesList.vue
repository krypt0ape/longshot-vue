<script setup>
import { computed } from "vue";
import useApi from "@/composables/useApi";
import VerticalScrollingList from "@/components/VerticalScrollingList.vue";
import CasinoGamesListItem from "@/components/CasinoGamesListItem.vue";
import useAsyncApi from "@/composables/useAsyncApi";

const props = defineProps({
  name: String,
  icon: String,
  filters: Array,
  limit: { type: Number, default: 20 },
})

const { data, refetch } = useApi("post", "/game-type/list", {
  filters: props.filters,
  limit: props.limit,
});

const { call: toggleFavourite } = useAsyncApi("POST", "/game-type/favourite");

const favourite = async (identifier) => {
  await toggleFavourite(undefined, identifier);
  refetch()
}

const gameTypes = computed(() => data.value?.[0] ?? []);

</script>

<template>
  <button @click="() => refetch({ search: 'acceptance' })" class="btn text-white">
    EMULATE SEACH BY "acceptance" STRING
  </button>
  <VerticalScrollingList :name="name" :icon="icon">
    <CasinoGamesListItem v-for="gameType in gameTypes" :key="gameType.identifier" :gameType="gameType"
      @favourite="() => favourite(gameType.identifier)" />
  </VerticalScrollingList>
</template>
