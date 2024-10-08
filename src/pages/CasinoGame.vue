<template>
  <div class="max-w-7xl mx-auto relative mt-8" :class="size">
    <div>
      <div class="h-[671px] relative rounded-t-xl overflow-hidden">
        <!-- <Authentificator
          :class="['absolute flex w-full h-full flex-col space-y-3 justify-center items-center bg-black bg-opacity-80 z-50', { fullscreen }]">
          <template #content>
            <div class="text-lg">Login to Play</div>
          </template>
          <CurrencyOverlay :fullscreen="fullscreen" @select="onConfirm" />
        </Authentificator> -->
        <div :key="wrapper" class="size" :class="size" id="game_wrapper"></div>
      </div>
      <div class="flex  justify-between items-center bg-brand-accentBgHeader rounded-b-xl py-3 px-6">
        <div class="flex gap-x-8 text-xl text-brand-darkerGrey">
          <i @click="onResize('fullscreen')" class="fa-solid fa-expand" />
          <i @click="onResize('theatre')" class="fa-solid fa-rectangle-wide" />
          <i class="fa-solid fa-chart-line" />
          <CasinoGameFavouriteToggle />
        </div>
        <div :class="disabledSwitch && 'opacity-100'" class="flex items-center"> 
          <span class="text-white">Fun Play</span>
          <Switch :disabled="disabledSwitch" @update:modelValue="onSwitch" :value="realPlay"
            :class="[realPlay ? 'bg-brand-purple' : 'bg-brand-bodyBg']"
            class="relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer mx-4">
            <span :class="realPlay ? 'translate-x-6' : 'translate-x-1'"
              class="inline-block h-4 w-4 transform rounded-full bg-white transition" />
          </Switch>
          <span class="text-white">Real Play</span>
        </div>
        <div>
			<GetCasinoProvidersLogo />
          	<img src="/img/LOGO-faded.png" alt="" />
        </div>
      </div>
	  <div>
		<!-- <CasinoGameTabs /> -->
	  </div>
	  <div class="mt-[50px]">
		<CasinoGamesList
			name="Reccomended"
			icon="fa-solid fa-rocket"
			:filters="['popular']"
		/>
	  </div>
	  <div>
		<CasinoProviders />
	  </div>
    </div>
  </div>
</template>

<script setup>
import { Switch } from '@headlessui/vue'
import { onMounted, ref, computed } from "vue";
import { useGameApi } from '@/composables/useGameApi'
import CurrencyOverlay from '@/components/CurrencyOverlay.vue'
import { useRoute } from "vue-router";
import { useLocalStorage } from "@/composables/useLocalStorage";
import Authentificator from "@/components/Authentificator.vue";
import CasinoProviders from '@/components/CasinoProviders.vue';
import CasinoGameFavouriteToggle from '@/components/CasinoGameFavouriteToggle.vue';
import CasinoGamesList from '@/components/CasinoGamesList.vue';
import CasinoGameTabs from '@/components/CasinoGameTabs.vue';
import useRecentlyPlayed from '@/composables/useRecentlyPlayed';

const route = useRoute()
const wrapper = ref(1)
const selectedCurrency = ref()
const size = ref()
const disabledSwitch = ref(true)

const {update} = useRecentlyPlayed();
const gameApi = useGameApi()

const listener = (evt) => {
  if (evt.key === 'Escape') {
    onResize();
  }
}

const realPlay = computed(() => Boolean(selectedCurrency.value))
const fullscreen = computed(() => size.value === 'fullscreen')

onMounted(async () => {
	update(route.params.game);
  document.removeEventListener('keyup', listener)
  document.addEventListener('keyup', listener);

  //await loadGame(ls.get('DEFAULT_CURRENCY', { ISO: 'USD', name: 'US Dollar' }));
})

const onResize = (v) => {
  const element = document.getElementById('main-layout')
  const toggleFromFullScreen = (v !== 'fullscreen' && size.value === 'fullscreen')
  const toggleToFullScreen = v === 'fullscreen'
  if (toggleFromFullScreen || toggleToFullScreen) {
    element?.classList.toggle('z-20')
    element?.classList.toggle('z-50')
  }
  size.value = v === size.value ? null : v
}

const onConfirm = (v) => {
  disabledSwitch.value = false
  loadGame(v)
}

const onSwitch = (realPlay) => {
  loadGame(realPlay ? ls.get('DEFAULT_CURRENCY', { ISO: 'USD', name: 'US Dollar' }) : null)
}

const loadGame = async (currency) => {
  if (currency?.ISO === selectedCurrency.value?.ISO) {
    return
  }
  selectedCurrency.value = currency
  wrapper.value += 1
  const gameLaunchOptions = {
    target_element: 'game_wrapper', launch_options: await gameApi.startSession(route.params.game, currency)
  };
  realPlay.value = Boolean(selectedCurrency.value)
  // Game launching command
  window.sg.launch(gameLaunchOptions);
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