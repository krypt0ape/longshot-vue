<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import useApi from "@/composables/useApi";
import SportsCategoryCard from "@/components/SportsCategoryCard.vue";
import NeutralButton from "@/components/Buttons/NeutralButton.vue";

const route = useRoute();
const sport = computed(() => route.params.sport);

const { data, refetch, loading } = useApi(
  "get",
  `/sportsbook/${sport.value}/categories`
);

onMounted(refetch);
</script>
<template>
  <div class="max-w-7xl mx-auto mt-[30px]">
    <SportsCategoryCard v-for="category in data" :title="category.name">
      <p class="pt-0 p-5">
        <NeutralButton
          v-for="tournament in category.tournaments"
          :to="`/sports/${category.sport.slug}/${category.slug}/${tournament.slug}`"
          as="RouterLink"
          class="!px-[15px] py-[14px] mr-3"
          >{{ tournament.name }}</NeutralButton
        >
      </p>
    </SportsCategoryCard>
  </div>
</template>
