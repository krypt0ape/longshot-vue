<script setup>
import useSidebarStore from "@/stores/useSidebarStore";
import AppHeader from "./components/AppHeader.vue";
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
import AppFooter from "./components/AppFooter.vue";
import AppSidebar from "./components/AppSidebar.vue";
import MobileMenu from "./components/MobileMenu.vue";
import PageInitialStateLoader from "./layouts/PageInitialStateLoader.vue";
import SignupModal from "@/components/SignupModal.vue";
import WalletModal from '@/components/WalletModal.vue'
import AcceptTermsModal from "@/components/AcceptTermsModal.vue";

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
  <PageInitialStateLoader>
    <div class="font-body relative w-screen flex">
      <div class="fixed bg-red-500 z-50 h-[50px] bottom-0 left-0 right-0 md:hidden">
        <MobileMenu />
      </div>
      <AppSidebar />

      <section class="relative flex-1">
        <div class="sticky top-0 left-0 right-0 z-50">
          <AppHeader @openWalletModal="() => openWalletModal = true" />
        </div>

        <div id="page" :class="['flex-1  relative  min-h-screen flex flex-col']">
          <div id="main-layout" class="flex-1 relative z-20 min-h-[500px]">
            <Transition name="page">
              <RouterView></RouterView>
            </Transition>
          </div>
          <div class="relative z-20">
            <AppFooter />
          </div>
        </div>
      </section>
      <aside>
      </aside>

      <!-- <PromotionModal />-->
      <WalletModal />
      <SignupModal />
	  <AcceptTermsModal />
    </div>
  </PageInitialStateLoader>
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
@/stores/useMenuStore
