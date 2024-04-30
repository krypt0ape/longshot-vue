<script setup>
import useSidebar from "@/composables/useSidebar";
import { useRoute } from "vue-router";
import AppSidebarPrimaryMenu from "./AppSidebarPrimaryMenu.vue";
import PrimaryButton from "./Buttons/PrimaryButton.vue";
import NeutralButton from "./Buttons/NeutralButton.vue";
import SecondaryButton from "./Buttons/SecondaryButton.vue";
import { computed } from "vue";
import AppSidebarSecondaryMenu from "./AppSidebarSecondaryMenu.vue";
import AppSidebarCasinoPrimary from "./AppSidebarCasinoPrimary.vue";
import AppSidebarCasinoSecondary from "./AppSidebarCasinoSecondary.vue";
import AppSidebarCasinoProviders from "./AppSidebarCasinoProviders.vue";
import AppSidebarSportsPrimary from "./AppSidebarSportsPrimary.vue";
import AppSidebarSportsSecondary from "./AppSidebarSportsSecondary.vue";

const store = useSidebar();
const route = useRoute();

const casinoActive = computed(() => {
	return route.path.startsWith("/casino");
});
const sportsActive = computed(() => {
	return route.path.startsWith("/sports");
});
</script>
<template>
	<div
		id="sidebar-pusher"
		class="hidden relative overflow-hidden md:block"
		:class="[store.open ? 'xl:w-[250px] w-[70px]' : 'w-[70px]']"
	>
		<div
			id="sidebar-wrapper"
			:class="[
				' bg-brand-sidebarBg  h-screen  left-0 top-0 fixed  overflow-scroll mt-[70px] z-40  w-[250px]  pb-[70px] ',
			]"
		>
			<div
				class="fixed top-0 left-0 right-0 bg-brand-bodyBg sidebar-top h-[70px] flex items-center z-20"
				:class="[store.open ? 'max-w-[250px]' : 'max-w-[70px]']"
			>
				<div
					v-if="store.open"
					class="w-[250px] bg-brand-bodyBg items-center justify-between px-4 transition flex"
				>
					<div
						class="cursor-pointer text-xl flex items-center justify-center"
						@click="store.toggle"
					>
						<i class="fa-solid fa-bars text-white" />
					</div>

					<PrimaryButton
						to="/sports/home"
						as="RouterLink"
						class="!px-[15px] py-[14px]"
						v-if="sportsActive"
						>Sports
					</PrimaryButton>
					<NeutralButton
						to="/sports/home"
						as="RouterLink"
						class="!px-[15px] py-[14px]"
						v-else
						>Sports</NeutralButton
					>

					<SecondaryButton
						to="/casino/home"
						as="RouterLink"
						class="!px-[15px] py-[14px]"
						v-if="casinoActive"
						>Casino
					</SecondaryButton>
					<NeutralButton
						to="/casino/home"
						as="RouterLink"
						class="!px-[15px] py-[14px]"
						v-else
						>Casino</NeutralButton
					>
				</div>
				<div
					v-if="!store.open"
					class="cursor-pointer text-xl w-[70px] flex items-center justify-center transition"
					@click="store.toggle"
				>
					<i class="fa-solid fa-bars text-white" />
				</div>
			</div>
			<div
				id="sidebar"
				:class="[store.open ? 'p-[16px]' : 'p-[10px]', 'relative  ']"
			>
				<div v-if="!store.open" class="text-center mt-2">
					<PrimaryButton
						as="RouterLink"
						to="/sports/home"
						small
						class="mb-3 !rounded-xl"
						v-tippy="{ content: 'Sports', placement: 'right' }"
					>
						<i class="fa-solid fa-futbol text-white text-2xl py-1.5" />
					</PrimaryButton>
					<SecondaryButton
						as="RouterLink"
						to="/casino/home"
						small
						class="mb-3 !rounded-xl"
						v-tippy="{ content: 'Casino', placement: 'right' }"
					>
						<i class="fa-solid fa-cards text-white text-xl py-1.5" />
					</SecondaryButton>
				</div>
				<div class="">
					<AppSidebarCasinoPrimary v-if="casinoActive" />
					<AppSidebarCasinoSecondary v-if="casinoActive" />
					<AppSidebarCasinoProviders v-if="casinoActive" />
					<AppSidebarSportsPrimary v-if="sportsActive" />
					<AppSidebarSportsSecondary v-if="sportsActive" />
					<AppSidebarPrimaryMenu />
					<AppSidebarSecondaryMenu />
				</div>
			</div>
		</div>
	</div>
</template>
<style>
.sidebar-top {
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}
</style>
@/stores/useMenuStore
@/composables/useSidebarStore