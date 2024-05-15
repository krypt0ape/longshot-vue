<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import PrimaryTab from "@/components/Tabs/PrimaryTab.vue";

const route = useRoute();

const items = computed(() => {
  return [
    {
      icon: 'fa-solid fa-globe',
      title: "Lobby",
      active: route.path.endsWith("/sports/home"),
      to: "/sports/home",
    },
    {
      icon: "fa-solid fa-game-board",
      title: "My Bets",
      active: route.path.endsWith("/sports/home/my-bets"),
      to: "/sports/home/my-bets",
    },
    {
      icon: 'fa-solid fa-slot-machine',
      title: "Favourites",
      active: route.path.endsWith("/sports/home/favourites"),
      to: "/sports/home/favourites",
    },
    {
      icon: 'fa-solid fa-cards',
      title: "Live Events",
      active: route.path.endsWith("/sports/home/live-events"),
      to: "/sports/home/live-events",
    },
    {
      icon: "fa-solid fa-gift",
      title: "Starting Soon",
      active: route.path.endsWith("/sports/home/starting-soon"),
      to: "/sports/home/starting-soon",
    },
  ];
});
</script>
<template>
  <div class="grid grid-cols-6 space-x-4 max-w-7xl mx-auto pt-[15px] pb-[30px]">
    <PrimaryTab v-for="item in items" :key="item.title" :item="item" color="secondary" />
  </div>
</template>
