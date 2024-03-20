<script setup lang="ts">
import { computed } from "vue";
import useApi from "@/composables/useApi";
import VerticalScrollingList from "@/components/VerticalScrollingList.vue";
import CasinoGamesListItem from "@/components/CasinoGamesListItem.vue";
import { GameType } from "@/types/game";
import useAsyncApi from "@/composables/useAsyncApi";

const props = withDefaults(defineProps<{
  name: string,
  icon: string,
  filters: [],
  limit: number,
}>(), {
  name: String,
  icon: String,
  filters: () => [],
  limit: 20,
});

const { data, refetch } = useApi<[GameType[], number]>("post", "/game-type/list", {
  filters: props.filters,
  limit: props.limit,
});

const { call: toggleFavourite } = useAsyncApi("POST", "/game-type/favourite");

const favourite = async (identifier: string) => {
  await toggleFavourite(undefined, identifier);
  refetch()
}

const gameTypes = computed(() => data.value?.[0] ?? []);

</script>

<template>
  <VerticalScrollingList :name="name" :icon="icon">
    <CasinoGamesListItem v-for="gameType in gameTypes" :key="gameType.identifier" :gameType="gameType"
      @favourite="() => favourite(gameType.identifier)" />
  </VerticalScrollingList>
</template>
