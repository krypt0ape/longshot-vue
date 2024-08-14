<script setup>
import { VMarkdownView } from "vue3-markdown";

defineProps({
	promotion: "required",
});
</script>
<template>
	<div>
		<h2 class="text-white text-3xl font-bold mb-2">
			{{ promotion.fields.title }}
		</h2>
		<img :src="promotion.fields.image.fields.file.url" class="w-[350px]" />
		<p class="text-slate-200 mb-2">
			<VMarkdownView :content="promotion.fields.summary"></VMarkdownView>
		</p>
		<RouterLink class="text-white" :to="`/blog/${promotion.fields.slug}`"
			>Read more</RouterLink
		>
	</div>
</template>
