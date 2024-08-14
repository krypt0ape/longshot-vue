<script setup>
import SportsTabs from "@/components/SportsTabs.vue";
import SportsPromoBoxs from "@/components/SportsPromoBoxs.vue";
import SportsEventSearch from "@/components/SportsEventSearch.vue";
</script>
<template>
  <div class="max-w-7xl mx-auto pt-[15px] relative px-4">
    <SportsPromoBoxs />
    <div class="pb-4 -mt-4">
      <SportsEventSearch />
    </div>
    <SportsTabs />
    <div class="min-h-[750px]">
      <Transition name="page">
        <router-view :key="$route.path"></router-view>
      </Transition>
    </div>
  </div>
</template>
