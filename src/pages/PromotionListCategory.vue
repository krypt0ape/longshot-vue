<script setup>
import useAsyncApi from "@/composables/useAsyncApi";
import PromotionListLayout from "@/components/PromotionListLayout.vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { computed, onMounted, ref } from "vue";
import AsyncContent from "@/components/AsyncContent.vue";

const route = useRoute();
const { locale, locales, t } = useI18n();

const data = ref(null);

const {
	call: getEntries,
	error,
	loading,
} = useAsyncApi("post", "/contentful/entries");

const contentfulRequest = {
	content_type: "promotion",
	select:
		"fields.title,fields.image,fields.summary,fields.endTime,fields.slug,fields.icon,fields.postCategory",
	order: "-sys.createdAt",
	limit: 12,
};

onMounted(async () => {
	if (route.params.category !== 'all') {
		const response = await getEntries({
			content_type: "promotionCategory",
			"fields.slug": route.params.category,
		});
		if (!response) return;
		data.value = await getEntries({...contentfulRequest, ...{
			links_to_entry: response.items[0].sys.id,
		}});
	}else {
		data.value = await getEntries(contentfulRequest);
	}
});
</script>
<template>
	<div class="max-w-7xl mx-auto text-white">
		<AsyncContent :loading="loading" :error="error" class="w-full min-h-[200px] flex items-center justify-center">
			<PromotionListLayout v-if="data?.items.length" :posts="data.items" />
			<div v-else class="relative z-20 mt-12">
				<p class="text-2xl text-brand-darkerGrey font-display tracking-wider">
					No Posts Found For This Category
				</p>
			</div>
		</AsyncContent>
	</div>
</template>
