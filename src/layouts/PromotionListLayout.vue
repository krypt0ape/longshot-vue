<script setup>
import PromotionCategoryTabs from "@/components/PromotionCategoryTabs.vue";
</script>
<template>
	<div class="relative">
		<img
			src="/img/GREEN-GLOW-TOP.png"
			class="absolute -top-[70px] mx-auto left-0 right-0 opacity-50 z-10"
		/>
		<div class="relative z-20">	
			<PromotionCategoryTabs />
			<router-view  :key="$route.fullPath"></router-view>
		</div>
	</div>
</template>