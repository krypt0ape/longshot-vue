<script setup>
import { computed } from 'vue';
import SportsLiveEventsTypeSelect from "@/components/SportsLiveEventsTypeSelect.vue";
import SportsIconTabs from "@/components/SportsIconTabs.vue";
import SportsTournamentCard from "@/components/SportsTournamentCard.vue";
import SportsEventCard from "@/components/SportsEventCard.vue";

defineProps({
  limit: {
    type: Number,
    default: 5,
  },
});
</script>
<template>
  <div class="max-w-7xl mx-auto">
    <div class="flex items-center ">
      <i class="fa-solid fa-play-circle text-brand-darkerGrey text-2xl" />
      <h3 class="text-white font-semibold text-lg px-4">Live Events</h3>
      <SportsLiveEventsTypeSelect />
    </div>
    <div class="my-[30px]">
      <SportsIconTabs />
    </div>
    <div>
      <SportsTournamentCard icon="fa-solid fa-futbol" title="International / WAFF Championship, Women">
        <SportsEventCard />
      </SportsTournamentCard>
      <SportsTournamentCard icon="fa-solid fa-futbol" title="International / WAFF Championship, Women">
        <SportsEventCard />
      </SportsTournamentCard>
      <SportsTournamentCard icon="fa-solid fa-futbol" title="International / WAFF Championship, Women">
        <SportsEventCard />
      </SportsTournamentCard>
      <div class="text-brand-light flex ml-[30px] space-x-4 items-center">
        <span class="bg-brand-dark-light flex items-center justify-center rounded-full h-[25px] w-[25px]">
          <i class="fa-solid fa-chevron-right text-xs" />
        </span>
        <p class="font-medium">View All</p>
      </div>
    </div>
  </div>
</template>