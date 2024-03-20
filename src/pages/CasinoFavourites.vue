<script setup>
import { ref, onMounted, computed } from "vue";
import CasinoProvidersLogo from "@/components/CasinoProvidersLogo.vue";
import CasinoSearch from "@/components/CasinoSearch.vue";
import useApi from "@/composables/useApi";
import CasinoGamesGrid from '@/components/CasinoGamesGrid.vue'

</script>

<template>
  <CasinoGamesGrid name="Favourite Games" icon="fa-solid fa-game-board" :filters="['favourite']" :limit="100" />
</template>

<style scoped>
.header-row {
  background: #0b1825;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
}
</style>
