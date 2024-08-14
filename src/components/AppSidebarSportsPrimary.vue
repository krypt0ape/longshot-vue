<script setup>
import AppSidebarMenu from "@/components/AppSidebarMenu.vue";
const items = [
  {
    icon: "fa-solid fa-circle-play",
    title: "Live Events",
    count: 34,
    to: "/sports/home",
  },
  {
    icon: "fa-solid fa-stopwatch",
    title: "Starting Soon",
    to: "/sports/home",
  },
  {
    icon: "fa-solid fa-receipt",
    title: "My Bets",
    to: "/sports/my-bets",
  },
];
</script>
<template>
  <div class="mb-4">
    <AppSidebarMenu :items="items" />
  </div>
</template>
<style></style>
