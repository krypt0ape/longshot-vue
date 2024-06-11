<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const items = computed(() => [
  {
    title: "Live & Upcoming",
    to: `/sports/${route.params?.sportSlug}`,
    active: route.path.endsWith(`/sports/${route.params?.sportSlug}`),
  },
  {
    title: "Outrights",
    to: `/sports/${route.params?.sportSlug}/outrights`,
    active: route.path.endsWith(`/sports/${route.params?.sportSlug}/outrights`),
  },
  {
    title: `All ${route.params?.sportSlug}`,
    to: `/sports/${route.params?.sportSlug}/all`,
    active: route.path.endsWith(`/sports/${route.params?.sportSlug}/all`),
  },
]);
</script>
<template>
  <div class="wrapper">
    <template v-for="item in items">
      <RouterLink
        :to="item.to"
        class="hover:text-white transition option"
        :class="{ active: item.active }"
      >
        {{ item.title }}
      </RouterLink>
    </template>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  text-transform: capitalize;
  display: inline-block;
  padding: 2px;
  border-radius: 25px;
  border: 1px solid var(--Accent-Stroke, #273646);
  background: #182330;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2);
  .option {
    border-radius: 25px;
    display: inline-block;
    padding: 15px;
    &:nth-child(2) {
      margin: 0 10px;
    }
    &.active {
      border-top: 1px solid #68d663;
      background: linear-gradient(180deg, #4fa630 0%, #205e1d 100%);
      box-shadow: 0px 2px 0px 0px rgba(255, 255, 255, 0.1) inset,
        0px 1px 0px 0px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
