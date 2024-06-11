<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import useApi from "@/composables/useApi";
import SportsCategoryCard from "@/components/SportsCategoryCard.vue";
import NeutralButton from "@/components/Buttons/NeutralButton.vue";

const route = useRoute();
const sportSlug = computed(() => route.params.sportSlug);

const { data, refetch, loading } = useApi(
  "get",
  `/sportsbook/${sportSlug.value}/categories`
);
</script>
<template>
  <div class="max-w-7xl mx-auto mt-[30px]">
    <SportsCategoryCard
      v-for="category in data?.categories"
      :title="category.name"
    >
      <p class="pt-0 p-5">
        <NeutralButton
          v-for="tournament in category.tournaments"
          :to="`/sports/${sportSlug}/${category.slug}/${tournament.slug}`"
          as="RouterLink"
          class="!px-[15px] py-[14px] mt-2 mr-3"
          >{{ tournament.name }}
          <span
            class="bg-green-100 text-green-800 text-xs font-medium px-2 pt-1 pb-0.5 rounded-lg ml-2 dark:bg-gray-700 dark:text-green-400 border border-green-400"
            >{{ tournament.sportEvents.length }}</span
          >
        </NeutralButton>
      </p>
    </SportsCategoryCard>
  </div>
</template>
