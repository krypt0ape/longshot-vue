<script setup lang="ts">
import { computed } from "vue";
import useApi from "@/composables/useApi";
import CasinoGamesListItem from "@/components/CasinoGamesListItem.vue";
import useAsyncApi from "@/composables/useAsyncApi";
import { GameType } from "@/types/game";


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
  <div class="">
    <div class="flex items-center mb-6 mt-4">
      <i :class="icon" class="text-brand-darkerGrey text-xl" />
      <h3 class="text-white font-semibold text-2xl px-4">{{ name }}</h3>
    </div>
    <div class="flex flex-wrap gap-6 ">
      <CasinoGamesListItem v-for="gameType in gameTypes" :key="gameType.identifier" :game-type="gameType"
        @favourite="() => favourite(gameType.identifier)" />
    </div>
  </div>
</template>