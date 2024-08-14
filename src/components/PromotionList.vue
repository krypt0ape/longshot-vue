<script setup>
import PromotionPreview from "@/components/PromotionPreview.vue";
import { useI18n } from "vue-i18n";
const { locale, locales, t } = useI18n();
defineProps({
	posts: {},
	featured: {},
});
</script>
<template>
	<div class="relative">
		<div class="relative z-20  max-w-7xl mx-auto">
			<div class="grid grid-cols-3 gap-x-8 gap-y-8 mt-[30px] mb-[50px]">
				<PromotionPreview
					v-for="post in posts"
					:key="post.slug"
					:post="post"
				/>
			
			</div>
		</div>
		<div></div>
	</div>
</template>
