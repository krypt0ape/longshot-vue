<script setup>
import useSidebarStore from "@/stores/useSidebarStore";
import AppHeader from "./components/AppHeader.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import AppFooter from "./components/AppFooter.vue";
import AppSidebar from "./components/AppSidebar.vue";

const store = useSidebarStore();
const route = useRoute();

const topImage = computed(() => {
	// Remove the top glow effect on the blog single page
	if (
		route.path.startsWith("/blog") &&
		!route.path.includes("category") &&
		!route.path.includes("casino/games")
	) {
	return null;
	}
	if (route.path.startsWith("/casino")) {
		return "/img/PURPLE-GLOW-TOP.png";
	}
	return "/img/GREEN-GLOW-TOP.png";
});
</script>
<template>
	<div class="font-body">
		<div class="fixed top-0 left-0 right-0 z-50">
			<AppHeader />
		</div>
		<div class="flex bg-brand-bodyBg">
			<div
				id="sidebar-wrapper"
				:class="[
					'bg-brand-sidebarBg h-screen left-0 top-[70px] fixed w-[250px] overflow-y-scroll pb-[70px]',
				]"
			>
				<AppSidebar />
			</div>
			<div
				id="page"
				:class="[
					'flex-1 pt-[70px] relative  min-h-screen flex flex-col ml-[250px]',
				]"
			>
				<div id="main-layout" class="flex-1 relative z-20 min-h-[500px]">
					<Transition name="page">
						<RouterView></RouterView>
					</Transition>
				</div>
				<div class="relative z-20">
					<AppFooter />
				</div>
			</div>
		</div>
		<!-- <PromotionModal />
    <WalletModal /> -->
	</div>
</template>
<style>
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
