<script setup>
const route = useRoute();
const { locale, locales, t } = useI18n();

const { data } = await useFetch("/api/promotion/category/" + route.params.category, {
	query: {
		lang: locale.value,
	},
});

const posts = computed(() => {
	if(! data.value.items.length > 1) return [];
	// remove first post from the list
	return data.value.items.slice(1);
});

</script>
<template>
	<div class="max-w-7xl mx-auto">
		<PromotionListLayout v-if="data.items.length" :featured="data.items[0]" :posts="posts" />
		<div v-else class="relative z-20 mt-12 ">
			<p class="text-2xl text-brand-darkerGrey font-display tracking-wider">No Posts Found For This Category</p>
		</div>
	</div>
</template>
