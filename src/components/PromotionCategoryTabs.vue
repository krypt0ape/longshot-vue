<script setup>
import reduce from "lodash/reduce";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import useApi from "@/composables/useApi";
import PostListTabs from "./PostListTabs.vue";
import AsyncContent from "./AsyncContent.vue";

const { locale, locales, t } = useI18n();

const {
	loading,
	error,
	data: categoryData,
} = useApi("post", "/contentful/entries", {
	content_type: "promotionCategory",
	select: "fields.name,fields.icon,fields.order,fields.slug",
	locale: locale.value !== "en" ? locale.value : "en-US",
});

const categories = computed(() => {
	// sort these by the fields.order field
	const items = reduce(
		categoryData.value.items,
		(result, item) => {
			result.push({
				name: item.fields.name,
				to: `/promotions/category/${item.fields.slug}`,
				icon: item.fields.icon,
				order: item.fields.order,
			});
			return result;
		},
		[]
	);

	return items.sort((a, b) => a.order - b.order);
});
</script>
<template>
	<div>
		<AsyncContent :loading="loading" :error="error">
			<template #loader />
			<PostListTabs
				heading="Promotions"
				slug="/promotions/category"
				:categories="categories"
			/>
		</AsyncContent>
	</div>
</template>
