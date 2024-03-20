<script setup>
//https://cdn.softswiss.net/i/s2/<provider>/<game.identifier>.png
import { ref, onMounted, onUnmounted } from "vue";
import NeutralButton from "./Buttons/NeutralButton.vue";

const track = ref();

const canScrollLeft = ref(false);
const canScrollRight = ref(true);

defineProps({
  name: String,
  icon: String,
});

const scrollLeft = () => {
  if (track.value) {
    track.value.scrollTo({
      left: track.value.scrollLeft - 150, // adjust the value as needed
      behavior: "smooth",
    });
    checkScrollPosition();
  }
};

const scrollRight = () => {
  if (track.value) {
    track.value.scrollTo({
      left: track.value.scrollLeft + 150, // adjust the value as needed
      behavior: "smooth",
    });
    checkScrollPosition();
  }
};

onMounted(() => {
  if (track.value) {
    track.value.addEventListener("scroll", checkScrollPosition);
  }
});

onUnmounted(() => {
  if (track.value) {
    track.value.removeEventListener("scroll", checkScrollPosition);
  }
});

const checkScrollPosition = () => {
  if (track.value) {
    canScrollLeft.value = track.value.scrollLeft > 0;
    canScrollRight.value =
      track.value.scrollLeft <
      track.value.scrollWidth - track.value.clientWidth;
  }
};
</script>
<template>
  <div class="flex justify-between items-center mb-1">
    <div class="flex items-center">
      <i :class="icon" class="text-brand-darkerGrey text-2xl" />
      <h3 class="text-white font-semibold text-2xl tracking-widest px-4 pt-1">{{ name }}</h3>
    </div>
    <div class="flex space-x-2">
      <NeutralButton @click="scrollLeft">
        <i class="fa-solid fa-chevron-left text-sm" />
      </NeutralButton>
      <NeutralButton @click="scrollRight">
        <i class="fa-solid fa-chevron-right text-xs" />
      </NeutralButton>
    </div>
  </div>
  <div class="relative">
    <div v-if="canScrollLeft" class="absolute top-0 left-0 bg-red-500 z-20 bottom-0 w-[50px] scroller-fadeout-left">
      &nbsp;
    </div>
    <div v-if="canScrollRight" class="absolute top-0 right-0 bg-red-500 z-20 bottom-0 w-[50px] scroller-fadeout-right">
      &nbsp;
    </div>
    <div ref="track" class="flex space-x-4 max-w-7xl overflow-x-scroll py-4 mb-8">
      <slot />
    </div>
  </div>
</template>
<style>
.scroller-fadeout-right {
  background: linear-gradient(270deg, #0E1725 0%, rgba(0, 0, 0, 0) 90%)
}

.scroller-fadeout-left {
  background: linear-gradient(90deg, #0E1725 0%, rgba(0, 0, 0, 0) 90%)
}
</style>
