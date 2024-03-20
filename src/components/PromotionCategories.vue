<script setup>
import { computed } from "vue";
import reduce from "lodash/reduce";
const { locale, locales, t } = useI18n();
const { data } = await useFetch("/api/promotion/category/list", {
	query: {
		lang: locale.value,
	},
});

const categories = computed(() => {
	// sort these by the fields.order field
	const items = reduce(
		data.value.items,
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
		<PostListTabs
			heading="Promotions"
			:categories="categories"
			slug="/promotions/category"
		/>
	</div>
</template>
