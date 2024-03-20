<template>
  <div class="max-w-7xl mx-auto relative mt-8" :class="size">
    <div>
      <div class="h-[671px] relative rounded-t-xl overflow-hidden">
        <Authentificator
          :class="['absolute flex w-full h-full flex-col space-y-3 justify-center items-center bg-black bg-opacity-80 z-50', { fullscreen }]">
          <template #content>
            <div class="text-lg">Login to Play</div>
          </template>
          <CurrencyOverlay :fullscreen="fullscreen" @select="loadGame" />
        </Authentificator>
        <div :key="wrapper" class="size" :class="size" id="game_wrapper"></div>
      </div>
      <div class="flex justify-between items-center bg-brand-dark-light rounded-b-xl py-3 px-6">
        <div class="flex gap-x-8 text-xl text-brand-darkerGrey">
          <i @click="onResize(Size.FULLSCREEN)" class="fa-solid fa-expand" />
          <i @click="onResize(Size.THEATRE)" class="fa-solid fa-rectangle-wide" />
          <i class="fa-solid fa-chart-line" />
          <CasinoGameFavouriteToggle />
        </div>
        <div></div>
        <div>
          <img v-if="providerLogo" :src="providerLogo" />
          <img src="/img/LOGO-faded.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { startSession } from '@/api/game'
import CurrencyOverlay from '@/components/CurrencyOverlay.vue'
import { useRoute } from "vue-router";
import type { Currency } from "@/components/CurrencyOverlay.vue";
import { LOCAL_STORAGE_KEY, useLocalStorage } from "@/composables/useLocalStorage";
import Authentificator from "@/components/Authentificator.vue";

enum Size {
  FULLSCREEN = 'fullscreen',
  THEATRE = 'theatre'
}

const route = useRoute()
const wrapper = ref<number>(1)
const selectedCurrency = ref<Currency>()
const size = ref<Size | null>()

const ls = useLocalStorage()

const providerLogo = computed(() => {
  return null;
});

const listener = (evt: KeyboardEvent) => {
  if (evt.key === 'Escape') {
    onResize();
  }
}

const fullscreen = computed(() => size.value === Size.FULLSCREEN)

onMounted(async () => {
  writeHistory()
  document.removeEventListener('keyup', listener)
  document.addEventListener('keyup', listener);

  await loadGame(ls.get(LOCAL_STORAGE_KEY.DEFAULT_CURRENCY, { ISO: 'USD', name: 'US Dollar' }));
})

const writeHistory = () => {
  const games = ls.get<string[]>(LOCAL_STORAGE_KEY.LAST_GAMES, [])
  games.unshift(route.params.game as string)
  const set = Array.from(new Set(games))
  ls.set(LOCAL_STORAGE_KEY.LAST_GAMES, set)
}

const onResize = (v?: Size) => {
  const element = document.getElementById('main-layout')
  if (v === Size.FULLSCREEN || (v !== Size.FULLSCREEN && size.value === Size.FULLSCREEN)) {
    element?.classList.toggle('z-20')
    element?.classList.toggle('z-50')
  }
  size.value = v === size.value ? null : v
}

const loadGame = async (currency?: Currency) => {
  if (currency?.ISO === selectedCurrency.value?.ISO) {
    return
  }
  selectedCurrency.value = currency
  wrapper.value += 1
  const gameLaunchOptions = {
    target_element: 'game_wrapper', launch_options: await startSession(route.params.game as string, currency)
  };

  // Game launching command
  (window as any).sg.launch(gameLaunchOptions);
}
</script>

<style scoped>
#game_wrapper {
  width: 100%;
  height: 100%;
}

.size.theatre,
.size.fullscreen {
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    flex-grow: 1;
  }
}

.fullscreen {
  max-width: 100vw;
  max-height: 100vh;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border: none;
  margin: 0;
  padding: 0;
}

.theatre {
  width: 100%;
  max-width: 100%;
  height: auto;
  margin: 0;
}
</style>