<script setup>
import { onMounted, defineModel } from 'vue'
import useApi from "@/composables/useApi";
import SportsCard from '@/components/SportsCard.vue'

const { data, refetch, loading } = useApi("get", "/sportsbook/sports");

onMounted(refetch)
const model = defineModel()

</script>

<template>
  <div v-if="data">
    <SportsCard v-for="sport in data" :title="sport.name" icon="icon" :count="sport.tournaments?.length" :key="sport"
      @click="() => model = sport.id" />
  </div>
</template>