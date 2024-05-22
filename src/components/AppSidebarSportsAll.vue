<script setup>
import { computed, onMounted } from "vue";
import Async from "@/components/Async.vue";
import AppSidebarMenu from "@/components/AppSidebarMenu.vue";
import useApi from "@/composables/useApi";

const { data, refetch, loading } = useApi("get", "/sportsbook/sports");

const items = computed(() =>
  data.value?.map((d) => ({
    title: d.name,
    to: `/sports/${d.slug}`,
  }))
);

onMounted(refetch);
</script>
<template>
  <div class="mb-4">
    <Async :loading="loading">
      <AppSidebarMenu :items="items" heading="All Sports" />
    </Async>
  </div>
</template>
<style></style>
