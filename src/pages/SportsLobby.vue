<script setup>
import { ref, watch } from 'vue'
import SportsList from "@/components/SportsList.vue";
import SportsPreEvents from "@/components/SportsPreEvents.vue";

const sportId = ref(null)

</script>

<template>
  <div class="text-white">
    <SportsList v-model="sportId" />
    <SportsPreEvents v-if="sportId" :limit="3" :sportId="sportId" />
  </div>
</template>
