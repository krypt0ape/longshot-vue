<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  gameType: Object,
})

const image = computed(() => {
  return `https://cdn.softswiss.net/i/s4/${props.gameType.providerIdentifier}/${props.gameType.identifier2}.png`;
});

const element = ref(null);

const icon = computed(() => props.gameType.favoured ? 'fa-solid fa-star' : 'fa-regular fa-star')

const emit = defineEmits({
  favourite: []
})

const goToGame = () => {
	window.location.href = `/casino/games/${props.gameType.identifier}`;
}
</script>
<template>
  <div @click="goToGame" ref="element" class=" relative  w-[150px]">
    <i :class="icon" @click="emit('favourite')"
      class="relative top-12 left-2 text-xl bg-purple-600 text-white rounded-md p-1 z-50 cursor-pointer"></i>
    <img :src="image"
      class="w-full h-[201px] rounded-xl transition shadow-lg ease-in-out duration-300 hover:-translate-y-3 cursor-pointer" />
    <p class="w-[150px] flex items-center mt-2 justify-center text-sm">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
        <circle cx="6" cy="6.5" r="5" fill="url(#paint0_linear_619_2322)" stroke="#142C13" stroke-width="2" />
        <defs>
          <linearGradient id="paint0_linear_619_2322" x1="6" y1="2.5" x2="6" y2="10.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#68D763" />
            <stop offset="1" stop-color="#3AAA35" />
          </linearGradient>
        </defs>
      </svg>
      <span class="mx-2 font-semibold text-brand-lightGrey">2,542</span><span
        class="text-brand-light text-brand-darkerGrey">Playing</span>
    </p>
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>