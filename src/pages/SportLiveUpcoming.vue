<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import useApi from "@/composables/useApi";
import useAsyncApi from "@/composables/useAsyncApi";
import SportsCategoryCard from "@/components/SportsCategoryCard.vue";
import SportsTournamentCard from "@/components/SportsTournamentCard.vue";
import SportsEventCard from "@/components/SportsEventCard.vue";

const route = useRoute();

const sportSlug = computed(() => route.params.sportSlug);

const { data } = useApi("get", `/sportsbook/${sportSlug.value}/categories`);

const tournaments = ref({});

const getCategoryTournaments = async (categorySlug) => {
  const { data: tournaments, call: getTournaments } = useAsyncApi("get");
  await getTournaments({
    path: `/sportsbook/${sportSlug.value}/${categorySlug}/tournaments`,
  });
  return tournaments;
};

const handleToggle = async (categorySlug, open) => {
  if (!open) {
    return;
  }
  tournaments.value[categorySlug] =
    tournaments.value[categorySlug] ||
    (await getCategoryTournaments(categorySlug));
};
</script>

<template>
  <div class="max-w-7xl mx-auto mt-[30px]">
    <h1>
      <i class="fa-solid fa-fire mr-3" />Popular
      <span class="capitalize">{{ sportSlug }}</span>
    </h1>
    <h1>
      <i class="fa-solid fa-fire mr-3" />All
      <span class="capitalize">{{ sportSlug }}</span>
    </h1>
    <SportsCategoryCard
      v-for="category in data?.categories"
      :title="category.name"
      @toggle="(open) => handleToggle(category.slug, !open)"
    >
      {{ tournaments }}
      <SportsTournamentCard
        v-if="typeof tournaments[category.slug] !== 'function'"
        v-for="tournament in tournaments[category.slug]"
        :title="tournament.name"
        :key="tournament.id"
      >
        <SportsEventCard
          v-for="sportEvent in tournament.sportEvents"
          :key="sportEvent.id"
          :sport-event="sportEvent"
        />
      </SportsTournamentCard>
      <span v-else>loading</span>
    </SportsCategoryCard>
  </div>
</template>
