<script setup>
import { onMounted } from "vue";
import useApi from "@/composables/useApi";

import SportsTournamentCard from "@/components/SportsTournamentCard.vue";
import SportsEventCard from "@/components/SportsEventCard.vue";

// const { data, refetch, loading } = useApi("get", "/sportsbook/list");

// onMounted(refetch);
</script>
<template>
  <div class="max-w-7xl mx-auto mt-[50px]">
    <div class="flex items-center">
      <i class="fa-solid fa-fire text-brand-darkerGrey text-2xl" />
      <h3 class="text-white font-semibold text-lg px-4">Popular Events</h3>
    </div>
    <div class="mt-[15px]">
      <SportsTournamentCard
        icon="fa-solid fa-futbol"
        title="International / WAFF Championship, Women"
        loadmore="/casino/home"
      >
        <SportsEventCard
          v-for="sportEvent in []"
          :key="sportEvent.id"
          :sport-event="sportEvent"
        />
      </SportsTournamentCard>
    </div>
  </div>
</template>
<style></style>
