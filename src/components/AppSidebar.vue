<script setup>
import useSidebarStore from "@/stores/useSidebarStore";
import { useRoute } from "vue-router";
import AppSidebarPrimaryMenu from "./AppSidebarPrimaryMenu.vue";
import PrimaryButton from "./Buttons/PrimaryButton.vue";
import NeutralButton from "./Buttons/NeutralButton.vue";
import SecondaryButton from "./Buttons/SecondaryButton.vue";
import {computed} from 'vue'
import AppSidebarSecondaryMenu from "./AppSidebarSecondaryMenu.vue";
import AppSidebarCasinoPrimary from "./AppSidebarCasinoPrimary.vue";
import AppSidebarCasinoSecondary from "./AppSidebarCasinoSecondary.vue";
import AppSidebarCasinoProviders from "./AppSidebarCasinoProviders.vue";
import AppSidebarSportsPrimary from "./AppSidebarSportsPrimary.vue";
import AppSidebarSportsSecondary from "./AppSidebarSportsSecondary.vue";

const store = useSidebarStore();
const route = useRoute();

const casinoActive = computed(() => {
	return route.path.startsWith("/casino");
});
const sportsActive = computed(() => {
	return route.path.startsWith("/sports");
});
</script>
<template>
	<div id="sidebar" :class="[store.open ? 'p-[16px]' : 'p-[10px]', '']">
		<div v-if="!store.open" class="text-center mt-2" >
			<RouterLink to="/sports/home">
				<PrimaryButton small class="mb-4" v-tippy="{ content: 'Sports', placement: 'right' }">
					<i class="fa-solid fa-futbol text-white text-2xl py-1.5" />
				</PrimaryButton>
			</RouterLink>
			<RouterLink to="/casino/home">
				<SecondaryButton small class="mb-4" v-tippy="{ content: 'Casino', placement: 'right' }">
					<i class="fa-solid fa-cards text-white text-xl py-1.5" />
				</SecondaryButton>
			</RouterLink>
		</div>
		<AppSidebarCasinoPrimary v-if="casinoActive" />
		<AppSidebarCasinoSecondary v-if="casinoActive" />
		<AppSidebarCasinoProviders v-if="casinoActive" />
		<AppSidebarSportsPrimary v-if="sportsActive" />
		<AppSidebarSportsSecondary v-if="sportsActive" /> 
		<AppSidebarPrimaryMenu />
		<AppSidebarSecondaryMenu />
	</div>
</template>
