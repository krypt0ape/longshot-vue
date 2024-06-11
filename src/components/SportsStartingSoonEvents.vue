<script setup>
import { ref, watch } from "vue";
import useApi from "@/composables/useApi";
import useAsyncApi from "@/composables/useAsyncApi";

import SportsEventsTypeSelect from "@/components/SportsEventsTypeSelect.vue";
import SportsIconTabs from "@/components/SportsIconTabs.vue";
import SportsTournamentCard from "@/components/SportsTournamentCard.vue";
import SportsEventCard from "@/components/SportsEventCard.vue";

const { data: sports } = useApi("get", "/sportsbook/pre/events");
const { data, call } = useAsyncApi("get");

const sportSlug = ref();

watch(sportSlug, (nVal) => {
  call({ path: `/sportsbook/${nVal}/pre/events` });
});
</script>

<template>
  <div class="max-w-7xl mx-auto">
    <div class="flex items-center">
      <i class="fa-solid fa-play-circle text-brand-darkerGrey text-2xl" />
      <h3 class="text-white font-semibold text-lg px-4">Coming Soon</h3>
      <SportsEventsTypeSelect />
    </div>
    <div class="my-[30px]">
      <SportsIconTabs v-if="sports" v-model="sportSlug" :options="sports" />
    </div>
    <div>
      <SportsEventCard
        v-for="event in data"
        :key="event.id"
        :sport-event="event"
      />
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
