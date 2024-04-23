<script setup>
import { useI18n } from "vue-i18n";
import SportsPromoBoxs from "@/components/SportsPromoBoxs.vue";
import SportsEventSearch from "@/components/SportsEventSearch.vue";
import SportsLobbyNav from "@/components/SportsLobbyNav.vue";
import SportsLiveEvents from "@/components/SportsLiveEvents.vue";
import SportsPopularEvents from "@/components/SportsPopularEvents.vue";
import SportsBettingInfo from "@/components/SportsBettingInfo.vue";
import SportsBettingInfoEn from "@/components/SportsBettingInfoEn.vue";

const { locale, locales, t } = useI18n();

</script>
<template>
	<div class="max-w-7xl mx-auto mt-[30px]">
	  <SportsPromoBoxs />
	  <SportsEventSearch />
	<SportsLobbyNav />
	  <SportsLiveEvents :limt="3" />
	  <SportsPopularEvents />
	  
	  <SportsBettingInfo>
		<SportsBettingInfoEn v-if="locale === 'en'" />
	  </SportsBettingInfo>
	</div>
  </template>