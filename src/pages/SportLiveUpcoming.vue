<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import useApi from "@/composables/useApi";
import SportsCategoryCard from "@/components/SportsCategoryCard.vue";
import SportsTournamentCard from "@/components/SportsTournamentCard.vue";
import SportsEventCard from "@/components/SportsEventCard.vue";

const route = useRoute();
const sport = computed(() => route.params.sport);

const { data } = useApi("get", `/sportsbook/${sport.value}/categories`);

const tournaments = {};

const getCategoryTournaments = async () => {};

const handleToggle = async (categoryId, open) => {
  if (!open) {
    return;
  }

  tournaments[categoryId] = tournaments[categoryId] || getCategoryTournaments();
};
</script>
<template>
  <div class="max-w-7xl mx-auto mt-[30px]">
    <h1>
      <i class="fa-solid fa-fire mr-3" />Popular
      <span class="capitalize">{{ sport }}</span>
    </h1>

    <!-- <SportsCategoryCard v-for="category in popular.categories" :name="category.name">
      <SportsTournamentCard
        v-for="tournament in category.tournaments"
        :icon="icon(tournament)"
        :title="title(tournament)"
        :key="tournament.id"
      >
        <SportsEventCard
          v-for="sportEvent in tournament.sportEvents"
          :key="sportEvent.id"
          :sport-event="sportEvent"
        />
      </SportsTournamentCard>
    </SportsCategoryCard> -->

    <h1>
      <i class="fa-solid fa-fire mr-3" />All
      <span class="capitalize">{{ sport }}</span>
    </h1>
    <SportsCategoryCard
      v-for="category in data?.categories"
      :title="category.name"
      @toggle="(open) => handleToggle(tournaments[category.id], open)"
    >
      {{ typeof tournaments[category.id] }}
      <SportsTournamentCard
        v-if="typeof tournaments[category.id] !== 'function'"
        v-for="tournament in tournaments[category.id]"
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
