<script setup client>
import AuthentificatorVue from "./Authentificator.vue";
import PrimaryButton from "./Buttons/PrimaryButton.vue";
import SecondaryButton from "./Buttons/SecondaryButton.vue";
import NeutralButton from "./Buttons/NeutralButton.vue";
import useSidebarStore from "@/stores/useSidebarStore";
import { useRoute } from "vue-router";
import {computed} from 'vue';
import AppHeaderWallet from "./AppHeaderWallet.vue";
import AppHeaderUserMenu from "./AppHeaderUserMenu.vue";

const route = useRoute();

const store = useSidebarStore();
const casinoActive = computed(() => {
  return route.path.startsWith("/casino");
});
const sportsActive = computed(() => {
  return route.path.startsWith("/sports");
});

const logo = computed(() => {
  if (casinoActive.value) {
    return "/img/LOGO-casino.png";
  }
  return "/img/ColorWhite_Full.png";
})
</script>
<template>
  <div class="app-header flex bg-brand-accentBgHeader ">
    <div v-if="store.open" class="w-[250px] bg-brand-bodyBg flex items-center justify-between px-4 transition">
      <div class="cursor-pointer text-xl flex items-center justify-center" @click="store.toggle">
        <i class="fa-solid fa-bars text-white" />
      </div>
      <RouterLink to="/sports/home">
        <PrimaryButton class="!px-[12px] py-[14px]"   v-if="sportsActive">Sports</PrimaryButton>
        <NeutralButton class="!px-[12px] py-[14px]" v-else>Sports</NeutralButton>
      </RouterLink>
      <RouterLink to="/casino/home">
        <SecondaryButton class="!px-[12px] py-[14px]"  v-if="casinoActive">Casino</SecondaryButton>
        <NeutralButton class="!px-[12px] py-[14px]"  v-else>Casino</NeutralButton>
      </RouterLink>
    </div>
    <div v-if="!store.open" class="cursor-pointer text-xl w-[70px] flex items-center justify-center transition"
      @click="store.toggle">
      <i class="fa-solid fa-bars text-white" />
    </div>
    <div class="flex-1 app-header-main py-0.5">
      <div class="flex justify-between max-w-7xl mx-auto">
        <div>
          <RouterLink to="/">
            <img :src="logo" class="w-[120px] py-[10px]" />
          </RouterLink>
        </div>
        <div>
			<AppHeaderWallet />
        </div>
        <AuthentificatorVue>
            <AppHeaderUserMenu />
          </AuthentificatorVue> 
      </div>
    </div>
  </div>
</template>
<style>
.app-header {

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}

</style>
