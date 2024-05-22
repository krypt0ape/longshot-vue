<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const sport = computed(() => route.params.sport);
</script>
<template>
  <div class="max-w-7xl mx-auto mt-[30px]">
    <h1>
      <i class="fa-solid fa-fire mr-3" />Popular
      <span class="capitalize">{{ sport }}</span>
    </h1>

    <SportsCategoryCard v-for="category in categories" :name="category.name">
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
    </SportsCategoryCard>
  </div>
</template>
