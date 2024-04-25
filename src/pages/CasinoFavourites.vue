<script setup>
import { ref, onMounted, computed } from "vue";
import CasinoProvidersLogo from "@/components/CasinoProvidersLogo.vue";
import CasinoSearch from "@/components/CasinoSearch.vue";
import BetFeedCasino from "@/components/BetFeedCasino.vue";
import CasinoGamesGrid from '@/components/CasinoGamesGrid.vue'
import PageHeader from '@/components/PageHeader.vue'

</script>

<template>
	<div>
		<PageHeader>Favourites</PageHeader>
		<img src="/img/PURPLE-GLOW-TOP.png" class="absolute -top-[125px] mx-auto left-0 right-0 opacity-75" />
		<div class="max-w-7xl mx-auto relative">
			<div class="py-2">
        		<CasinoSearch v-model="search" />
      		</div>
			<!-- <CasinoGamesGrid name="Favourite Games" icon="fa-solid fa-game-board" :filters="['favourite']" :limit="100" /> -->
			<div>
				<BetFeedCasino />
			</div>	
		</div>
	</div>
</template>

<style scoped>
.header-row {
  background: #0b1825;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
}
</style>
