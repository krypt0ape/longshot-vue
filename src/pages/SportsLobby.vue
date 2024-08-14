<script setup>
import { ref } from "vue";
import SportsLiveEvents from "@/components/SportsLiveEvents.vue";
import SportsPopularEvents from "@/components/SportsPopularEvents.vue";

const sportId = ref(null);
</script>

<template>
  <div class="text-white">
    <SportsLiveEvents />
    <SportsPopularEvents />
  </div>
</template>
