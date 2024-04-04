<script setup>
import { computed } from "vue";
import useApi from "@/composables/useApi";
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
  await toggleFavourite(identifier);
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