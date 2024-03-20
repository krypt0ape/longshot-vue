<script setup>
import BlogCategoryTabs from "@/components/BlogCategoryTabs.vue";
</script>
<template>
	<div class="relative">
		<img
			src="/img/green-bg.png"
			class="w-full absolute top-[0px] left-0 right-0"
		/>
		<img
			src="/img/GREEN-GLOW-TOP.png"
			class="absolute -top-[70px] mx-auto left-0 right-0 opacity-50 z-10"
		/>
		<div class="relative z-20">	
			<BlogCategoryTabs />
			<router-view  :key="$route.fullPath"></router-view>
		</div>
	</div>
</template>
