<script setup>
import { onMounted, defineModel, defineProps } from "vue";

import SportsEntityIcon from "@/components/SportsEntityIcon.vue";

const model = defineModel();

const { options } = defineProps({
  options: {
    required: true,
    type: Array,
  },
});

onMounted(() => {
  model.value = options[0]?.slug;
});
</script>
<template>
  <div
    v-for="sport in options"
    :key="sport.slug"
    @click="() => (model = sport.slug)"
    :class="{
      'active border-green-900 text-white': model === sport.slug,
      'border-brand-grey text-brand-grey': model !== sport.slug,
    }"
    class="border-solid p-5 m-2 cursor-pointer rounded-lg border-2 inline-block"
  >
    <SportsEntityIcon entity="sport" :name="sport.name" />
    <span
      class="bg-red-500 text-white text-xs font-medium py-1 px-2 rounded-full"
      >{{ sport.sportEvents?.length || 0 }}</span
    >
    <p>{{ sport.name }}</p>
  </div>
</template>

<style lang="scss" scoped="true">
.active {
  background: linear-gradient(rgb(32, 62, 51) 0%, rgb(14, 23, 37) 100%);
}
</style>
