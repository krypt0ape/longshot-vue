<script setup client>
import AuthentificatorVue from "./Authentificator.vue";
import PrimaryButton from "./Buttons/PrimaryButton.vue";
import SecondaryButton from "./Buttons/SecondaryButton.vue";
import NeutralButton from "./Buttons/NeutralButton.vue";
import useSidebarStore from "@/stores/useSidebarStore";
import { useRoute } from "vue-router";
import { computed } from "vue";
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
});
</script>
<template>
	<div class="app-header bg-brand-accentBgHeader">
		<div class="flex justify-between items-center h-[70px] max-w-7xl mx-auto px-4">
			<div class="w-[150px] xl:w-[250px]">
				<RouterLink to="/">
					<img :src="logo" class="w-[100px] py-[10px] hidden sm:block" />
					<img src="/android-chrome-512x512.png" class="w-[50px] rounded-xl py-[10px] sm:hidden" />
				</RouterLink>
			</div>
			<div class="flex-1 flex justify-center ">
				<AppHeaderWallet />
			</div>
			<div class="w-[150px]  xl:w-[250px] flex justify-end">
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
