<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import SportsCategoriesTypeSelect from "@/components/SportsCategoriesTypeSelect.vue";
import NeutralButton from "@/components/Buttons/NeutralButton.vue";

const route = useRoute();

const sport = computed(() => route.params.sport);
</script>
<template>
  <div class="text-white z-10">
    <div
      class="z-[-1] absolute glow-green -top-[170px] mx-auto left-0 right-0 opacity-75"
    >
      &nbsp;
    </div>
    <div class="bg-brand-sidebarBg p-3 mb-2 rounded-sm shadow-sm">
      <NeutralButton
        to="/sports/home"
        as="RouterLink"
        class="!px-[15px] py-[14px] mr-5 text-brand-lightGrey"
      >
        <i class="fa-duotone fa-chevron-left mr-5 my-1"></i>
        Go Back
      </NeutralButton>
      <h1
        class="text-3xl uppercase font-semibold inline-block relative top-[5px]"
      >
        {{ sport }}
      </h1>
    </div>
    <div class="max-w-7xl mx-auto pt-[15px] relative px-4">
      <SportsCategoriesTypeSelect />
      <div class="min-h-[750px]">
        <Transition name="page">
          <router-view :key="$route.path"></router-view>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
