<script setup>
import { ref, watch } from "vue";
import useAsyncApi from "@/composables/useAsyncApi";

import SportsLiveEventsTypeSelect from "@/components/SportsLiveEventsTypeSelect.vue";
import SportsIconTabs from "@/components/SportsIconTabs.vue";
import SportsTournamentCard from "@/components/SportsTournamentCard.vue";
import SportsEventCard from "@/components/SportsEventCard.vue";
import SportsCategoryCard from "@/components/SportsCategoryCard.vue";

const { data, call } = useAsyncApi("get");

const sportSlug = ref();

watch(sportSlug, (nVal) => {
  call({ path: `/sportsbook/${nVal}/live/events` });
});
</script>

<template>
  <div class="max-w-7xl mx-auto">
    <div class="flex items-center">
      <i class="fa-solid fa-play-circle text-brand-darkerGrey text-2xl" />
      <h3 class="text-white font-semibold text-lg px-4">Live Events</h3>
      <SportsLiveEventsTypeSelect />
    </div>
    <div class="my-[30px]">
      <SportsIconTabs v-model="sportSlug" />
    </div>
    <div>
      <template v-for="category in data">
        <SportsTournamentCard
          v-for="tournament in category.tournaments"
          :title="tournament.name"
        >
          <SportsEventCard
            v-for="event in tournament.sportEvents"
            :key="event.id"
            :sport-event="event"
          />
        </SportsTournamentCard>
      </template>

      <div class="text-brand-light flex ml-[30px] space-x-4 items-center">
        <span
          class="bg-brand-dark-light flex items-center justify-center rounded-full h-[25px] w-[25px]"
        >
          <i class="fa-solid fa-chevron-right text-xs" />
        </span>
        <p class="font-medium">View All</p>
      </div>
    </div>
  </div>
</template>
