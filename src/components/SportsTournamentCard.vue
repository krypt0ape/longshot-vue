<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronRightIcon } from "@heroicons/vue/20/solid";
import SportsEntityIcon from "@/components/SportsEntityIcon.vue";

defineProps({
  title: "required",
  loadmore: "",
});
</script>
<template>
  <div class="sports-tournament-card mb-[20px]">
    <Disclosure v-slot="{ open }" :defaultOpen="true">
      <!-- Use the `open` state to conditionally change the direction of an icon. -->
      <DisclosureButton
        class="flex justify-between w-full sports-tournament-card-heading px-[32px] py-[20px]"
      >
        <div class="flex space-x-4">
          <SportsEntityIcon :name="title" entity="tournament" />
          <h4 class="text-brand-darkerGrey font-medium">
            {{ title }}
          </h4>
        </div>
        <ChevronRightIcon
          :class="[open ? 'rotate-90 transform' : '', ' h-6 w-6']"
        />
      </DisclosureButton>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-out"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <DisclosurePanel>
          <slot />
          <div
            v-if="loadmore"
            class="pl-12 mt-4 py-6 border-t border-[#426575]"
          >
            <!-- <RouterLink :to="loadmore" class="text-brand-darkerGrey font-semibold">
              <i class="fa-solid fa-angle-right mr-4" />Load More
            </RouterLink> -->
          </div>
        </DisclosurePanel>
      </transition>
    </Disclosure>
  </div>
</template>
<style scoped>
.sports-tournament-card {
  border-radius: 5px;
  border: 1px solid #426575;
  background: linear-gradient(335deg, #171f2b 24.05%, #2c3e4e 61.46%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}
</style>
